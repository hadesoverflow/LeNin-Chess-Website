import React from 'react';
import CheckIcon from './icons/CheckIcon';

const ValueCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-brand-green/30 transition-all duration-300 transform hover:-translate-y-2 ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-brand-green">
    <div className="flex items-center mb-4">
      <div className="bg-brand-green p-2 rounded-full mr-4">
        <CheckIcon />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-bg/50">
      <div className="container mx-auto px-6">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase">
            Về <span className="text-brand-gold">LeNin Chess</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Câu chuyện, giá trị và tầm nhìn của chúng tôi.
          </p>
        </div>

        {/* Câu chuyện hình thành + Ảnh minh họa */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Nội dung */}
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-brand-gold mb-3">
                Câu chuyện hình thành
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>LeNin Chess</strong> ra đời từ mong muốn tạo ra một sân chơi tri thức, nơi
                người chơi có thể vừa giải trí, vừa củng cố kiến thức qua những câu hỏi thử thách.  
                Đây không chỉ là một bàn cờ, mà là một hành trình chinh phục đỉnh cao tri thức.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-gold mb-3">
                Tầm nhìn
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Trở thành một trong những trò chơi chiến lược phổ biến nhất tại Việt Nam,  
                sau đó mở rộng ra quốc tế với nhiều phiên bản hấp dẫn.
              </p>
            </div>
          </div>

          {/* Ảnh minh họa local - giảm kích thước xuống 50% */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/background/leninchess-background.jpg"
              alt="LeNin Chess Game Board"
              className="w-1/2 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Giá trị cốt lõi */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Giá trị cốt lõi
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              title="Giải trí thông minh"
              description="Kết hợp vui chơi và học hỏi."
            />
            <ValueCard
              title="Rèn luyện tư duy"
              description="Tư duy thép – Quyết định dứt khoát, lựa chọn mang lại kết quả."
            />
            <ValueCard
              title="Kết nối cộng đồng"
              description="Cùng bạn bè, gia đình trải qua những trận đấu kịch tính."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
