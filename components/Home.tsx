import React from 'react';

interface HomeProps {
  navigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ảnh nền chìm */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[4000ms] animate-slow-zoom"
        style={{
          // Nếu ảnh nằm trong /public/background/background.jpg, nên dùng đường dẫn tuyệt đối:
          // backgroundImage: "url('/background/background.jpg')",
          backgroundImage: "url('background/background.jpg')",
        }}
      ></div>

      {/* Overlay gradient làm ảnh “chìm” để chữ nổi bật */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 dark:from-black/70 dark:via-black/60 dark:to-black/80"></div>

      {/* Nội dung */}
      <div className="container mx-auto px-6 text-center z-10">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider leading-tight mb-4 animate-fade-in-down 
          [text-shadow:0_4px_8px_rgba(0,0,0,0.6)]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-amber-300">
            LeNin Chess
          </span>
          <br />
          <span className="text-white">Chơi để chinh phục đỉnh cao tri thức!</span>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Chào mừng bạn đến với <strong>LeNin Chess</strong> – trò chơi chiến lược tri thức đầy
          kịch tính, nơi mỗi nước đi đều là một thử thách trí tuệ. Trả lời câu hỏi, vận dụng chiến
          thuật và bứt phá để trở thành người chiến thắng!
        </p>

        {/* Nút hành động */}
        <div
          className="flex justify-center items-center flex-wrap gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {/* 🎮 Chơi ngay → mở host ngoài */}
          <a
            href="https://hadesoverflow-lenin-at92.bolt.host/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out hover:scale-105 shadow-lg shadow-brand-gold/40"
          >
            🎮 Chơi ngay
          </a>

          {/* 📺 Xem Luật chơi → chuyển trang GameGuide.tsx qua state */}
          <button
            type="button"
            onClick={() => navigate('guide')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out hover:scale-105"
          >
            📺 Xem Luật chơi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
