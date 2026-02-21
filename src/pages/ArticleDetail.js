import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LanContext } from './Root';
import { articlesList } from '../data/articlesData';
import '../styles/articles.css';

const ArticleDetail = () => {
  const { slug } = useParams();
  const lang = useContext(LanContext);
  const article = articlesList.find((a) => a.slug === slug);
  const isRtl = lang.languge === 'fa' || lang.languge === 'ar';

  if (!article) {
    return (
      <div className={'articles-page' + (isRtl ? ' dir-rtl' : '')}>
        <div className="articles-list-inner" style={{ padding: '4rem 5%', textAlign: 'center' }}>
          <p>{lang.languge === 'fa' ? 'مقاله یافت نشد.' : lang.languge === 'ru' ? 'Статья не найдена.' : lang.languge === 'ar' ? 'المقالة غير موجودة.' : 'Article not found.'}</p>
          <Link to="/articles" className="articles-readmore" style={{ marginTop: '1rem', display: 'inline-block' }}>{lang.languge === 'fa' ? 'بازگشت به مقالات' : lang.languge === 'ru' ? 'Назад к статьям' : lang.languge === 'ar' ? 'العودة إلى المقالات' : 'Back to Articles'}</Link>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (!article.content) return null;
    const blocks = article.content.split(/\n\n+/).filter((b) => b.trim());
    return blocks.map((block, i) => {
      const trimmed = block.trim();
      const isHeading = trimmed.indexOf('\n') === -1 && trimmed.length < 80;
      return isHeading ? (
        <h3 key={i} className="article-detail-heading">{trimmed}</h3>
      ) : (
        <p key={i} className="article-detail-paragraph">{trimmed}</p>
      );
    });
  };

  return (
    <div className={'articles-page' + (isRtl ? ' dir-rtl' : '')}>
      <div className="articles-list-inner article-detail-inner">
        <Link to="/articles" className="articles-readmore" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>{lang.languge === 'fa' ? 'بازگشت به مقالات' : lang.languge === 'ru' ? 'Назад к статьям' : lang.languge === 'ar' ? 'العودة إلى المقالات' : 'Back to Articles'}</Link>
        <article className="article-detail-article">
          <div className="article-detail-header">
            <span className="articles-card-category">{(lang.articles && lang.articles.category) || 'Category'}: {article.category}</span>
            <h1 className="article-detail-title">{article.title}</h1>
            <div className="articles-card-keywords">
              {article.keywords.map((kw) => (
                <span key={kw} className="articles-keyword">{kw}</span>
              ))}
            </div>
          </div>
          <div className="article-detail-body">
            {renderContent()}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
