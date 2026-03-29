import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDirectory = path.join(process.cwd(), 'content')

export interface Article {
  slug: string
  title: string
  date: string
  category: string
  subcategory: string
  excerpt: string
  content: string
  prediction?: string
  team1?: string
  team2?: string
}

export function getArticleBySlug(category: string, subcategory: string, slug: string): Article | null {
  try {
    const fullPath = path.join(contentDirectory, category, subcategory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      category,
      subcategory,
      excerpt: data.excerpt || '',
      content: marked(content) as string,
      prediction: data.prediction || '',
      team1: data.team1 || '',
      team2: data.team2 || '',
    }
  } catch (error) {
    console.error(`Error reading article: ${category}/${subcategory}/${slug}`, error)
    return null
  }
}

export function getArticlesByCategory(category: string, subcategory?: string): Article[] {
  const articles: Article[] = []
  
  try {
    const categoryPath = path.join(contentDirectory, category)
    
    if (!fs.existsSync(categoryPath)) {
      return []
    }

    const subcategories = subcategory 
      ? [subcategory] 
      : fs.readdirSync(categoryPath).filter(item => {
          return fs.statSync(path.join(categoryPath, item)).isDirectory()
        })

    subcategories.forEach(sub => {
      const subPath = path.join(categoryPath, sub)
      
      if (fs.existsSync(subPath)) {
        const files = fs.readdirSync(subPath).filter(file => file.endsWith('.md'))
        
        files.forEach(file => {
          const slug = file.replace(/\.md$/, '')
          const article = getArticleBySlug(category, sub, slug)
          if (article) {
            articles.push(article)
          }
        })
      }
    })

    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error(`Error getting articles for category: ${category}`, error)
    return []
  }
}

export function getRecentArticles(limit: number = 10): Article[] {
  const allArticles: Article[] = []
  
  try {
    if (!fs.existsSync(contentDirectory)) {
      return []
    }

    const categories = fs.readdirSync(contentDirectory).filter(item => {
      return fs.statSync(path.join(contentDirectory, item)).isDirectory()
    })

    categories.forEach(category => {
      const categoryArticles = getArticlesByCategory(category)
      allArticles.push(...categoryArticles)
    })

    return allArticles
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit)
  } catch (error) {
    console.error('Error getting recent articles:', error)
    return []
  }
}

export function getAllSlugs(category: string, subcategory: string): string[] {
  try {
    const subPath = path.join(contentDirectory, category, subcategory)
    
    if (!fs.existsSync(subPath)) {
      return []
    }

    return fs.readdirSync(subPath)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''))
  } catch (error) {
    console.error(`Error getting slugs for ${category}/${subcategory}:`, error)
    return []
  }
}
