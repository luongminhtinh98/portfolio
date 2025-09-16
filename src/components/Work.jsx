import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiRightArrowAlt } from "react-icons/bi";
import dataWorks from './../DataWork';

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [visibleWorks, setVisibleWorks] = useState(2); // Số lượng video được hiển thị ban đầu
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [showLessVisible, setShowLessVisible] = useState(false); // Trạng thái hiển thị nút "Ẩn bớt"

  useEffect(() => {
    const works = dataWorks.filter(work => selectedFilter === "all" || selectedFilter === work.filter);
    setFilteredWorks(works);
    // Reset số lượng video hiển thị khi thay đổi filter
    setVisibleWorks(2);
    // Ẩn nút "Ẩn bớt" khi thay đổi filter
    setShowLessVisible(false);
  }, [selectedFilter]);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const handleShowMore = () => {
    setVisibleWorks(prevVisibleWorks => prevVisibleWorks + 2); // Hiển thị thêm 2 video khi bấm vào nút "Show more"
    // Hiển thị nút "Ẩn bớt" khi đã hiển thị hết video
    if (visibleWorks + 2 >= filteredWorks.length) {
      setShowLessVisible(true);
    }
  };

  const handleShowLess = () => {
    setVisibleWorks(2); // Đặt lại số lượng video hiển thị về 2
    setShowLessVisible(false); // Ẩn nút "Ẩn bớt"
  };

  return (
    <div>
      <section className="work section" id="work" style={{ textAlign: "center" }}>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration={2000}>
          <span className="section__subtitle">My Showtime</span>
          <h2 className="section__title">Recent Work</h2>
        </div>
        <div className="work__filters" data-aos="fade-left" data-aos-duration={1000}>
          {/* Hiển thị các loại công việc */}
          <span
            className={`work__item ${selectedFilter === "all" ? "active-work" : ""}`}
            onClick={() => handleFilterClick("all")}
            data-filter="all"
          >
            All
          </span>
          <span
            className={`work__item ${selectedFilter === "coffee" ? "active-work" : ""}`}
            onClick={() => handleFilterClick("coffee")}
            data-filter=".coffee"
          >
            Coffee
          </span>
          <span
            className={`work__item ${selectedFilter === "wedding" ? "active-work" : ""}`}
            onClick={() => handleFilterClick("wedding")}
            data-filter=".wedding"
          >
            Wedding
          </span>
          <span
            className={`work__item ${selectedFilter === "party" ? "active-work" : ""}`}
            onClick={() => handleFilterClick("party")}
            data-filter=".party"
          >
            Party
          </span>
          <span
            className={`work__item ${selectedFilter === "cover" ? "active-work" : ""}`}
            onClick={() => handleFilterClick("cover")}
            data-filter=".cover"
          >
            Solo cover
          </span>
          {/* Thêm các loại công việc khác vào đây nếu cần */}
        </div>
        {filteredWorks.length === 0 && (
          <p>Sorry! This section has not been updated</p>
        )}
        <div className="container grid work__container">
          {filteredWorks.slice(0, visibleWorks).map((work, index) => (
            <motion.div
              key={index}
              className="work__card"
              data-aos="fade-up" data-aos-duration={1000}
            >
              <iframe className="work__img" src={work.videoUrl} title={work.title} />
              <h3 className="work__title">{work.title}</h3>
              <a href={work.videoUrl} target="_blank" rel="noopener noreferrer" className="work__button">
                Watch now! <BiRightArrowAlt className='work__icon' />
              </a>
            </motion.div>
          ))}
        </div>
        {filteredWorks.length > visibleWorks && (
          <button className="show-more-button button" onClick={handleShowMore} style={{ padding: "10px 10px", fontSize: '12px', borderRadius: '5px', marginTop: "2rem" }}>
            Show more video....
          </button>
        )}
        {showLessVisible && (
          <button className="show-more-button button" onClick={handleShowLess} style={{ padding: "10px 10px", fontSize: '12px', borderRadius: '5px', marginTop: "2rem" }}>
            Show less video....
          </button>
        )}
      </section>
    </div>
  );
};

export default Work;
