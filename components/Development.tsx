import React from 'react';
import IdeaIcon from './icons/IdeaIcon';
import DesignIcon from './icons/DesignIcon';
import TestIcon from './icons/TestIcon';
import BetaIcon from './icons/BetaIcon';
import LaunchIcon from './icons/LaunchIcon';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  icon,
  isLast = false,
}) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    {!isLast && (
      <div className="absolute top-0 left-4 sm:left-[118px] h-full w-0.5 bg-gray-300 dark:bg-gray-700 group-hover:bg-brand-green transition-colors duration-300"></div>
    )}
    <div className="font-bold text-brand-gold sm:absolute sm:top-5 sm:left-0 sm:transform-none sm:w-28 sm:text-right">
      {date}
    </div>
    <div className="flex flex-col sm:flex-row items-center">
      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mt-10 sm:mt-0 sm:mr-[2.1rem] sm:ml-[-0.3rem] bg-gray-200 dark:bg-gray-800 group-hover:bg-brand-gold/10 transition-all duration-300 border-4 border-brand-green z-10 group-hover:scale-110 group-hover:-rotate-12">
        {icon}
      </div>
      <div className="flex-1 mt-6 sm:mt-0">
        <h4 className="font-bold text-xl text-gray-900 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  </div>
);

const Development: React.FC = () => {
  const teamMembers = [
    { name: 'Nguyễn Nhật Chương', role: 'Project Lead / Full Stacks', img: '/developer/NguyenNhatChuong.jpg'},
    { name: 'Mai Hải Nam', role: 'Data Analyst / Back-End', img: '/developer/MaiHaiNam.jpg'},
    { name: 'Trương Tuấn Vũ', role: 'UI/UX Designer / Event Analysis', img: '/developer/TruongTuanVu.jpg'},
    { name: 'Lê Viết Hoàng Hiệp', role: 'Testing / Presentation Content', img: '/developer/LeVietHoangHoangHiep.jpg'}
  ];

  return (
    <section id="development" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase">
            Lộ trình <span className="text-brand-gold">Phát triển</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Từ ý tưởng đến ngày ra mắt chính thức.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <TimelineItem
            date="11/09/2025"
            title="Ý tưởng"
            description="Hình thành khái niệm “Lenin Chess” & Phân tích Data."
            icon={<IdeaIcon />}
          />
          <TimelineItem
            date="15/09/2025"
            title="Thiết kế"
            description="Xây dựng luật chơi, giao diện và nhân vật."
            icon={<DesignIcon />}
          />
          <TimelineItem
            date="20/09/2025"
            title="Thử nghiệm nội bộ"
            description="Chơi thử trong nhóm nhỏ, cân bằng luật chơi."
            icon={<TestIcon />}
          />
          <TimelineItem
            date="23/09/2025"
            title="Bản Beta"
            description="Mở đăng ký sớm cho cộng đồng bạn bè."
            icon={<BetaIcon />}
          />
          <TimelineItem
            date="01/10/2025"
            title="Ra mắt chính thức"
            description="Phát hành bản hoàn chỉnh trên nền tảng Website."
            icon={<LaunchIcon />}
            isLast={true}
          />
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Đội ngũ phát triển
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Một nhóm trẻ đầy nhiệt huyết, đam mê sáng tạo và mong muốn đem lại trải nghiệm chơi game vừa vui vừa bổ ích.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center group"
              >
                <img
                  src={
                    member.img
                      ? member.img
                      : `https://ui-avatars.com/api/?name=${member.name.replace(
                          ' ',
                          '+'
                        )}&background=16a34a&color=fff&size=128`
                  }
                  className="rounded-full border-4 border-brand-green w-32 h-32 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-green/30"
                  alt={`Ảnh đại diện của ${member.name}`}
                />
                <h4 className="mt-4 font-bold text-lg text-gray-900 dark:text-white">
                  {member.name}
                </h4>
                <p className="text-sm text-brand-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
