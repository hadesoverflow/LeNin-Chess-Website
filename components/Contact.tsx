import React, { useState } from 'react';
import FacebookIcon from './icons/FacebookIcon';
import DiscordIcon from './icons/DiscordIcon';
import { GoogleGenAI } from '@google/genai';


const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!name || !email) return;

        setLoading(true);
        setResponseMessage('');
        setError('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const prompt = `Một người dùng tên là "${name}" với email "${email}" vừa đăng ký trải nghiệm sớm trò chơi "LeNin Chess" của chúng tôi. Hãy soạn một email xác nhận thân thiện và chuyên nghiệp gửi cho họ. Cảm ơn họ đã quan tâm, xác nhận rằng họ đã được ghi danh vào danh sách chờ bản Beta, và cho họ biết rằng chúng tôi sẽ sớm liên hệ lại với thông tin chi tiết. Phản hồi phải hoàn toàn bằng tiếng Việt. Bắt đầu bằng lời chào đến ${name}.`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            setResponseMessage(response.text);
            setName('');
            setEmail('');
        } catch (err) {
            console.error("Error calling Gemini API:", err);
            setError('Rất tiếc, đã có lỗi xảy ra trong quá trình đăng ký. Vui lòng thử lại sau.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase">
                        Đăng ký & <span className="text-brand-gold">Liên hệ</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Tham gia chơi thử và kết nối với đội ngũ phát triển.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-900/50 p-8 rounded-lg shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Đăng ký trải nghiệm sớm</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Điền email của bạn để nhận thông báo khi game ra mắt và có cơ hội tham gia phiên bản Beta.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tên của bạn</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-md border-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/50 transition-all"
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-md border-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/50 transition-all"
                                        required
                                        disabled={loading}
                                    />
                                </div>
                                <button type="submit" className="w-full bg-brand-gold hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-md transition-transform duration-300 ease-in-out hover:scale-105 disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed disabled:scale-100" disabled={loading}>
                                     {loading ? (
                                        <div className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Đang xử lý...</span>
                                        </div>
                                    ) : (
                                        'Đăng ký ngay'
                                    )}
                                </button>
                            </form>
                             {responseMessage && (
                                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/50 border-l-4 border-green-500 text-green-800 dark:text-green-200 rounded-r-lg animate-fade-in-up">
                                    <h4 className="font-bold">Đăng ký thành công!</h4>
                                    <p className="whitespace-pre-wrap mt-2">{responseMessage}</p>
                                </div>
                            )}
                            {error && (
                                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/50 border-l-4 border-red-500 text-red-800 dark:text-red-200 rounded-r-lg animate-fade-in-up">
                                     <h4 className="font-bold">Lỗi!</h4>
                                    <p className="mt-2">{error}</p>
                                </div>
                            )}
                        </div>
                        
                        <div className="flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Thông tin liên hệ</h3>
                                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                                     <p>
                                        <strong>📧 Email:</strong> 
                                        <a href="mailto:Chuongnn12.work@gmail.com" className="ml-2 text-brand-gold hover:underline">Chuongnn12.work@gmail.com</a>
                                    </p>
                                   <a href="https://www.facebook.com/meiinamm/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-brand-gold transition-colors">
                                       <FacebookIcon className="h-5 w-5 text-brand-gold" />
                                        <span>Facebook LeNin Chess</span>
                                   </a>
                                   <a href="https://discord.gg/gtg2XhRu" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-brand-gold transition-colors">
                                        <DiscordIcon className="h-5 w-5 text-brand-gold" />
                                        <span>Cộng đồng Discord</span>
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;