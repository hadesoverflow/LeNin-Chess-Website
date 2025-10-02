import React, { useState } from 'react';

const NewsCard: React.FC<{ date: string; title: string; tag: string; tagColor: string; link: string }> = ({ date, title, tag, tagColor, link }) => (
    <a href={link} className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg group overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-brand-gold/20 border-2 border-transparent hover:border-brand-gold/50">
        <div className="flex justify-between items-start mb-4">
            <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${tagColor}`}>{tag}</span>
            <p className="text-gray-500 dark:text-gray-500 text-sm font-medium whitespace-nowrap">{date}</p>
        </div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-gold transition-colors duration-300 mb-2">{title}</h4>
        <p className="text-brand-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Đọc thêm &rarr;</p>
    </a>
);

const News: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if(email) {
            alert(`Cảm ơn bạn đã đăng ký nhận tin với email: ${email}`);
            setEmail('');
        }
    };

    return (
        <section id="news" className="py-20 bg-gray-50 dark:bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase">
                        Tin tức & <span className="text-brand-gold">Cập nhật</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Những thông tin nóng hổi nhất từ dự án.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <NewsCard link="#" date="01/10/2025" title="Chính thức mở đăng ký Beta Test, tham gia ngay để trải nghiệm sớm LeNin Chess!" tag="📢 Thông báo" tagColor="bg-blue-600 text-white" />
                    <NewsCard link="#" date="15/11/2025" title="Cập nhật giao diện mới: thêm hệ thống nhân vật đại diện cực ngầu." tag="🆕 Cập nhật" tagColor="bg-green-600 text-white" />
                    <NewsCard link="#" date="01/12/2025" title="Mini game cộng đồng: Cơ hội nhận code trải nghiệm miễn phí!" tag="🎁 Sự kiện" tagColor="bg-yellow-500 text-gray-900" />
                </div>
                
                <div className="bg-white dark:bg-gray-800/50 rounded-lg p-8 md:p-12 text-center shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Đăng ký nhận bản tin</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">Đừng bỏ lỡ bất kỳ thông báo quan trọng nào! Nhận tin tức mới nhất trực tiếp vào hộp thư của bạn.</p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email của bạn"
                            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 rounded-md border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/50 transition-all"
                            required
                        />
                        <button type="submit" className="w-full sm:w-auto bg-brand-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 whitespace-nowrap flex-shrink-0">
                            Đăng ký ngay
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default News;