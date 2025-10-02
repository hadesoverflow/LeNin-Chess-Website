import React from 'react';
import LinkIcon from './icons/LinkIcon';

const developmentResources = [
    { title: "Ý tưởng phát triển game", url: "https://2game.vn/game/co-ty-phu-mobile" },
    { title: "Ý tưởng xây dựng nhân vật", url: "https://img.9gate.net/files/317931873/2014/09/08/1410167340-cotyphu2.jpg" }
];

const quizResources = [
    { title: "MLN111 FE Flash Cards (Set 1)", url: "https://quizlet.com/vn/1013217442/mln111-fe-flash-cards/" },
    { title: "MLN111 Chương 1 & 2", url: "https://quizlet.com/vn/1082516329/mln111-chuong-2-mln111-chuong-1-flash-cards/" },
    { title: "MLN111 Chương 2", url: "https://quizlet.com/vn/779361031/mln111-chuong-2-flash-cards/" },
    { title: "MLN111 Flash Cards (Set 2)", url: "https://quizlet.com/vn/886028120/mln111-flash-cards/" },
    { title: "MLN111 Flash Cards (Set 3)", url: "https://quizlet.com/vn/1049424657/mln111-flash-cards/" }
];

const ResourceCard: React.FC<{ title: string; url:string; }> = ({ title, url }) => (
    <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg group overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-brand-gold/20 border-2 border-transparent hover:border-brand-gold/50 flex items-start space-x-4"
    >
        <div className="flex-shrink-0 bg-brand-gold p-3 rounded-full mt-1 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <LinkIcon />
        </div>
        <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-gold transition-colors duration-300 mb-2">{title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 break-all">{url}</p>
            <p className="text-brand-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 text-xs">
                Truy cập liên kết &rarr;
            </p>
        </div>
    </a>
);

const Resources: React.FC = () => {
    return (
        <section id="resources" className="py-20 bg-gray-50 dark:bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase">
                        Nguồn Dữ Liệu & <span className="text-brand-gold">Tài Nguyên</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Phần 1: Tài nguyên xây dựng game */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center border-b-2 border-brand-gold/50 pb-4">
                            Tài nguyên Xây dựng Game
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6">
                            {developmentResources.map((link, index) => (
                                <ResourceCard
                                    key={`dev-${index}`}
                                    title={link.title}
                                    url={link.url}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Phần 2: Dữ liệu câu hỏi Quiz */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center border-b-2 border-brand-gold/50 pb-4">
                            Dữ liệu câu hỏi Quiz
                        </h3>
                         <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
                            Tất cả dữ liệu câu hỏi trong game "LeNin Chess" được tham khảo và tổng hợp từ các bộ câu hỏi công khai trên Quizlet. Chúng tôi đã thu thập hơn 500 câu hỏi để tạo ra một trải nghiệm Game Quiz phong phú và thử thách.
                        </p>
                        <div className="grid md:grid-cols-1 gap-6">
                            {quizResources.map((link, index) => (
                                <ResourceCard
                                    key={`quiz-${index}`}
                                    title={link.title}
                                    url={link.url}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resources;