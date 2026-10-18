import React, { useState } from 'react';
import { KNOWLEDGE_ARTICLES, KnowledgeArticle } from '../data/landingData.ts';

export const KnowledgeHub: React.FC = () => {
  const [readingArticle, setReadingArticle] = useState<KnowledgeArticle | null>(null);

  return (
    <section id="knowledge" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#3D6A52]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-widest block mb-2">
            Góc Sức Khỏe & Y Học Cổ Truyền
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E35] [text-wrap:balance]">
            Cẩm nang dưỡng sinh & bí quyết sống khỏe
          </h2>
          <div className="w-16 h-0.5 bg-[#3D6A52] mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#2C3E35]/75 leading-relaxed">
            Dưỡng sinh không phải việc đợi có bệnh mới chữa, mà là thói quen thuận theo tự nhiên mỗi ngày. Lắng nghe những chia sẻ tâm huyết từ các lương y và kỹ thuật viên An An.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {KNOWLEDGE_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#3D6A52]/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#3D6A52]/10 text-[#3D6A52] flex items-center justify-center text-xl group-hover:bg-[#3D6A52] group-hover:text-white transition-colors duration-300">
                    <i className={`fa-solid ${article.icon}`}></i>
                  </div>
                  <div className="text-right text-xs text-[#2C3E35]/60 font-medium">
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="text-xs text-[#3D6A52] font-semibold uppercase tracking-wider mb-2">
                  {article.category}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2C3E35] mb-3 leading-snug group-hover:text-[#3D6A52] transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#2C3E35]/75 leading-relaxed line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#FAF7F2] flex items-center justify-between">
                <span className="text-xs text-[#2C3E35]/60 italic truncate max-w-[170px]">
                  {article.author}
                </span>

                <button
                  type="button"
                  onClick={() => setReadingArticle(article)}
                  className="text-xs font-semibold text-[#3D6A52] hover:text-[#2C4B3A] inline-flex items-center gap-1.5 focus-visible:outline-none"
                >
                  <span>Đọc bí quyết</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal: Full Article Reading View */}
      {readingArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-[#3D6A52]/20 text-left relative">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#3D6A52]/10 text-[#2C3E35] flex items-center justify-center transition-colors"
              aria-label="Đóng bài viết"
            >
              <i className="fa-solid fa-xmark text-base"></i>
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#3D6A52] uppercase tracking-wider mb-2">
              <span>{readingArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{readingArticle.readTime}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C3E35] mb-3 leading-snug">
              {readingArticle.title}
            </h3>

            <div className="text-xs text-[#2C3E35]/60 mb-6 pb-4 border-b border-[#3D6A52]/10">
              Biên soạn bởi: <strong className="text-[#2C3E35] font-semibold">{readingArticle.author}</strong>
            </div>

            <div className="prose prose-slate max-w-none text-[#2C3E35]/85 space-y-5 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-[#2C3E35] bg-[#FAF7F2] p-4 rounded-2xl border border-[#3D6A52]/10">
                {readingArticle.content.intro}
              </p>

              <div className="space-y-4 my-6">
                {readingArticle.content.points.map((pt, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-[#3D6A52]/15 bg-white">
                    <h4 className="font-serif font-bold text-base sm:text-lg text-[#3D6A52] mb-1">
                      {pt.name}
                    </h4>
                    <p className="text-xs text-[#2C3E35]/70 italic mb-2">
                      {pt.desc}
                    </p>
                    <p className="text-sm text-[#2C3E35]/85">
                      <strong>Cách thực hiện: </strong>{pt.guide}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#3D6A52]/10 text-[#2C3E35] text-sm">
                <strong className="text-[#3D6A52]">Lời khuyên từ An An: </strong>
                {readingArticle.content.conclusion}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#3D6A52]/10 flex justify-end">
              <button
                type="button"
                onClick={() => setReadingArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#3D6A52] text-white text-xs sm:text-sm font-semibold hover:bg-[#2C4B3A] transition-colors"
              >
                Đã hiểu & Áp dụng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
