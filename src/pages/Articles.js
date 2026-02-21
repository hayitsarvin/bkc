import React, { useContext, useEffect, useState, useMemo } from 'react';
import '../styles/articles.css';
import { LanContext } from './Root';
import { articlesList } from '../data/articlesData';
import { Link } from 'react-router-dom';

const Articles = () => {
  const lang = useContext(LanContext);
  const [searchQuery, setSearchQuery] = useState('');
  const languge = lang.languge;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return articlesList;
    const q = searchQuery.toLowerCase().trim();
    return articlesList.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.shortDescription.toLowerCase().includes(q) ||
        a.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const featuredArticle = filteredArticles[0];
  const restArticles = filteredArticles.slice(1);
  const isRtl = languge === 'fa' || languge === 'ar';
  const articles = lang.articles || {};

  return (
    <div className={'articles-page' + (isRtl ? ' dir-rtl' : '')}>
      {/* First frame: hero + search */}
      <section className="articles-hero">
        <div className="articles-hero-inner">
          <div className="articles-hero-left">
            <h1 className="articles-hero-title">{articles.heroTitle || 'BONYAN KALA CHEMIE'}</h1>
            <p className="articles-hero-subtitle">{articles.heroSubtitle || 'Expert knowledge and practical insights in resins, coatings, and advanced materials.'}</p>
          </div>
          <div className="articles-hero-right">
            <h2 className="articles-explore-title">{articles.exploreTitle || 'Explore Knowledge'}</h2>
            <p className="articles-explore-subtext">{articles.exploreSubtext || 'Discover technical insights and industry expertise.'}</p>
            <div className="articles-search-wrap">
              <img src="/images/search.svg" alt="" className="articles-search-icon" aria-hidden />
              <input
                type="search"
                className="articles-search-input"
                placeholder={articles.searchPlaceholder || 'Type keywords to find articles...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label={articles.searchPlaceholder || 'Search articles'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles section */}
      <section className="articles-list-section">
        <div className="articles-list-inner">
          {featuredArticle && (
            <article className="articles-card articles-card--featured">
              <div className="articles-card-image-wrap">
                <img src={featuredArticle.image} alt="" className="articles-card-image" />
              </div>
              <div className="articles-card-content">
                <span className="articles-card-category">{articles.category || 'Category'}: {featuredArticle.category}</span>
                <h3 className="articles-card-title">{featuredArticle.title}</h3>
                <p className="articles-card-desc">{featuredArticle.shortDescription}</p>
                <div className="articles-card-keywords">
                  {featuredArticle.keywords.map((kw) => (
                    <span key={kw} className="articles-keyword">{kw}</span>
                  ))}
                </div>
                <Link to={`/articles/${featuredArticle.slug}`} className="articles-readmore">
                  {articles.readMore || 'Read more'}
                </Link>
              </div>
            </article>
          )}

          <div className="articles-grid">
            {restArticles.map((item) => (
              <article key={item.id} className="articles-card">
                <div className="articles-card-image-wrap">
                  <img src={item.image} alt="" className="articles-card-image" />
                </div>
                <div className="articles-card-content">
                  <span className="articles-card-category">{articles.category || 'Category'}: {item.category}</span>
                  <h3 className="articles-card-title">{item.title}</h3>
                  <p className="articles-card-desc">{item.shortDescription}</p>
                  <div className="articles-card-keywords">
                    {item.keywords.map((kw) => (
                      <span key={kw} className="articles-keyword">{kw}</span>
                    ))}
                  </div>
                  <Link to={`/articles/${item.slug}`} className="articles-readmore">
                    {articles.readMore || 'Read more'}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <p className="articles-no-results">{languge === 'fa' ? 'مقاله‌ای یافت نشد.' : languge === 'ar' ? 'لم يتم العثور على مقالات.' : languge === 'ru' ? 'Статьи не найдены.' : 'No articles found.'}</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Articles;
