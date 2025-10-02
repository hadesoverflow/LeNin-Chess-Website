import React from 'react';

// A reusable component for displaying a rule category.
const RuleCategory: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center border-b-2 border-brand-gold/50 pb-4">
            {title}
        </h3>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

// A reusable component for displaying a single rule item.
const RuleCard: React.FC<{ title: string; badge?: string; badgeColor?: string; children: React.ReactNode }> = ({ title, badge, badgeColor, children }) => (
    <div className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-brand-green/20 transition-shadow duration-300">
        <div className="flex justify-between items-start mb-3">
            <h4 className="text-xl font-bold text-brand-gold">{title}</h4>
            {badge && <span className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${badgeColor}`}>{badge}</span>}
        </div>
        <div className="text-gray-600 dark:text-gray-400 space-y-2">
            {children}
        </div>
    </div>
);

const GameGuide: React.FC = () => {
    return (
        <section id="guide" className="py-20 bg-gray-50 dark:bg-dark-bg/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase">
                        Luật Chơi <span className="text-brand-gold">LeNin Chess</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Nắm vững luật chơi để chinh phục đỉnh cao tri thức!</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <RuleCategory title="Các Loại Ô & Chức Năng">
                        <RuleCard title="1. Ô Thưởng" badge="Yêu cầu trả lời đúng" badgeColor="bg-green-600">
                            <p>Khi vào ô này và trả lời đúng câu hỏi, người chơi sẽ nhận ngẫu nhiên một trong các phần thưởng sau:</p>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>Cộng Điểm:</strong> +100, +150, hoặc +200 KP (Tỉ lệ 70%).</li>
                                <li><strong>Tiến Bước:</strong> Tiến thêm 3 đến 5 bước (Tỉ lệ 30%).</li>
                            </ul>
                        </RuleCard>

                        <RuleCard title="2. Ô Phạt">
                            <p>Người chơi sẽ bị phạt ngẫu nhiên một trong các hình thức sau:</p>
                             <ul className="list-disc list-inside pl-4">
                                <li><strong>Trừ Điểm:</strong> -100, -150, hoặc -200 KP (Tỉ lệ 70%).</li>
                                <li><strong>Lùi Bước:</strong> Lùi lại 3 đến 5 bước (Tỉ lệ 30%).</li>
                            </ul>
                        </RuleCard>

                        <RuleCard title="3. Ô Mua Thẻ" badge="Yêu cầu trả lời đúng" badgeColor="bg-green-600">
                            <p>Cho phép người chơi dùng KP để mua các thẻ chức năng với giá cố định:</p>
                             <ul className="list-disc list-inside pl-4">
                                <li><strong>Thẻ x2 điểm:</strong> 300 KP.</li>
                                <li><strong>Thẻ tránh bị tấn công:</strong> 200 KP.</li>
                                <li><strong>Thẻ giữ điểm (khi trả lời sai):</strong> 250 KP.</li>
                            </ul>
                        </RuleCard>

                        <RuleCard title="4. Ô Tấn Công" badge="Yêu cầu trả lời đúng" badgeColor="bg-green-600">
                            <p>Người chơi có thể chọn một đối thủ bất kỳ và khiến họ phải lùi lại 5 ô. Thẻ "Tránh bị tấn công" có thể được dùng để phòng thủ.</p>
                        </RuleCard>

                        <RuleCard title="5. Ô Đầu Tư" badge="Yêu cầu trả lời đúng" badgeColor="bg-green-600">
                            <p>Ô mạo hiểm cao. Người chơi đặt cược một số KP (100, 200, 300,...):</p>
                             <ul className="list-disc list-inside pl-4">
                                <li><strong>Trả lời đúng:</strong> Nhận x2 số KP đã cược.</li>
                                <li><strong>Trả lời sai:</strong> Mất x2 số KP đã cược.</li>
                            </ul>
                        </RuleCard>

                        <RuleCard title="6. Ô Cơ Hội 🎟️" badge="Yêu cầu trả lời đúng" badgeColor="bg-green-600">
                             <p>Người chơi rút thẻ và chọn một người khác để "liên kết số phận" trong lượt kế tiếp. Kết quả của người bị chọn sẽ ảnh hưởng đến cả hai:</p>
                             <ul className="list-disc list-inside pl-4">
                                <li><strong>Nếu người kia trả lời đúng:</strong> Cả hai cùng được +100 đến +200 KP (ngẫu nhiên).</li>
                                <li><strong>Nếu người kia trả lời sai:</strong> Cả hai cùng bị -100 đến -200 KP (ngẫu nhiên).</li>
                            </ul>
                        </RuleCard>
                        
                        <RuleCard title="7. Ô Quỹ Tri Thức" badge="Yêu cầu trả lời đúng" badgeColor="bg-green-600">
                            <p>Nhận được một buff quyền năng: loại bỏ một đáp án sai miễn phí trong 2 lượt kế tiếp. Giúp tiết kiệm KP và tăng tỉ lệ trả lời đúng.</p>
                        </RuleCard>

                        <RuleCard title="8. Ô Đặc Biệt ⭐" badge="Không random KP" badgeColor="bg-blue-600">
                           <ul className="list-disc list-inside pl-4 space-y-2">
                               <li><strong>Bến Khởi Hành Cách Mạng Tri Thức:</strong> Nhận +200 KP mỗi lần đi qua hoặc dừng lại.</li>
                               <li><strong>Phòng Thi Giữa Kỳ:</strong> Trả lời 10 câu. Đúng ≥ 7 câu nhận +300 KP, ngược lại bị -200 KP.</li>
                               <li><strong>Phòng Thi Cuối Kỳ:</strong> Trả lời 10 câu. Đúng ≥ 7 câu nhận +500 KP, ngược lại bị -300 KP.</li>
                               <li><strong>Nhà Tù Nô Lệ Học:</strong> Bị buộc trả lời 30 câu hỏi liên tiếp, sau đó quay lại ô Bắt đầu.</li>
                           </ul>
                        </RuleCard>
                    </RuleCategory>

                    <RuleCategory title="Hỗ Trợ & Điều Kiện Chơi">
                         <RuleCard title="Hỗ Trợ Trả Lời">
                            <p>Người chơi có thể sử dụng KP để nhận trợ giúp khi trả lời câu hỏi:</p>
                             <ul className="list-disc list-inside pl-4">
                                <li><strong>Loại trừ đáp án sai:</strong> Trừ 200 KP.</li>
                                <li><strong>Hỏi Bot:</strong> Trừ 300 KP.</li>
                            </ul>
                        </RuleCard>
                         <RuleCard title="Điều Kiện Thua">
                            <p>Nếu KP của người chơi bị trừ xuống mức <strong>-2000 KP</strong>, người đó sẽ bị loại khỏi cuộc chơi. Những người chơi còn lại vẫn tiếp tục cho đến khi tìm ra người chiến thắng cuối cùng.</p>
                        </RuleCard>
                    </RuleCategory>

                    <RuleCategory title="Đề Xuất Phân Bổ Ô (40 ô)">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-bold text-2xl text-brand-gold">25%</p>
                                <p className="text-gray-700 dark:text-gray-300">Ô Thưởng (10 ô)</p>
                            </div>
                             <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-bold text-2xl text-brand-gold">18%</p>
                                <p className="text-gray-700 dark:text-gray-300">Ô Phạt (7 ô)</p>
                            </div>
                             <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-bold text-2xl text-brand-gold">12%</p>
                                <p className="text-gray-700 dark:text-gray-300">Ô Mua Thẻ (5 ô)</p>
                            </div>
                             <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-bold text-2xl text-brand-gold">8%</p>
                                <p className="text-gray-700 dark:text-gray-300">Ô Tấn Công (3 ô)</p>
                            </div>
                             <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-bold text-2xl text-brand-gold">12%</p>
                                <p className="text-gray-700 dark:text-gray-300">Ô Đầu Tư (5 ô)</p>
                            </div>
                             <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-bold text-2xl text-brand-gold">10%</p>
                                <p className="text-gray-700 dark:text-gray-300">Ô Cơ Hội (4 ô)</p>
                            </div>
                             <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-bold text-2xl text-brand-gold">5%</p>
                                <p className="text-gray-700 dark:text-gray-300">Ô Quỹ Tri Thức (2 ô)</p>
                            </div>
                             <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                <p className="font-bold text-2xl text-brand-gold">10%</p>
                                <p className="text-gray-700 dark:text-gray-300">Ô Đặc Biệt (4 ô)</p>
                            </div>
                        </div>
                    </RuleCategory>
                </div>
            </div>
        </section>
    );
};

export default GameGuide;