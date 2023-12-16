import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Projects.scss";
import { useInView } from "react-intersection-observer";
import ss from "../../assets/instagram.jpg";
import { projects } from "../../assets/data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 500 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation once
  });

  return (
    <section
      id="projects"
      className={`projects-container ${inView ? "inView" : ""}`}
      ref={ref}
    >
      <h2>Projects</h2>
      <div className="c-cont">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on the server-side.
          infinite={true}
          // autoPlaySpeed={2000}
          keyBoardControl={true}
          // transitionDuration={2000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop" // Set to "desktop" for the autoPlay prop
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project_card">
                <img
                  className="img-class"
                  src={project.icon}
                  alt={project.name}
                />
                <div className="project-overlay">
                  <h3>{project.name}</h3>
                  <p>
                  {project.description.map((d) => (
                    <h4>{d}</h4>
                  ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
