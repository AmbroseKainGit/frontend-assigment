"use client";
import Button from "@/components/General/Button/Button";
import styles from "@/styles/Components/DetailInformation/DetailInformation.module.css";
import { Chapters } from "@/types/types";
import { transformDate, transformHour } from "@/utils/transformDate";
import {
  AiOutlineLike,
  AiOutlineFolderAdd,
  AiOutlineShareAlt,
  AiOutlineClockCircle,
  AiOutlineCalendar
} from "react-icons/ai";
import { BiLoader } from "react-icons/bi";
interface Props {
  title: Chapters;
}
function DetailInformation({ title }: Props) {
  const getDescription = (title: Chapters) => {
    const videoDescriptions = {
      [Chapters.NEXT_JS_FUNDAMENTALS]:
        "In this comprehensive video, we'll delve deep into the world of Next.js, exploring its core principles, architecture, and key features. You'll gain a solid grasp of server-side rendering, routing, and the benefits of using Next.js for building modern web applications. Whether you're a beginner or an experienced developer, this video will provide valuable insights into the fundamentals of Next.js.",
      [Chapters.CREATING_FIRST_PROJECT]:
        "Join us as we embark on a step-by-step journey to create your very first Next.js project from scratch. We'll guide you through setting up the development environment, creating the essential project files, and explaining the structure. By the end of this video, you'll be equipped to kickstart your web development endeavors with confidence.",
      [Chapters.DATA_FETCHING]:
        "Dive into the intricacies of data fetching in Next.js. We'll cover the various data retrieval methods, including server-side rendering (SSR), static site generation (SSG), and client-side data fetching. You'll learn when and how to use each of these techniques, empowering you to build data-driven and interactive web applications.",
      [Chapters.STATIC_DYNAMIC]:
        "Uncover the power of static site generation and dynamic rendering with Next.js. We'll take a deep dive into the concepts of pre-rendering pages and discuss the advantages of static and dynamic approaches. By the end of this video, you'll have a clear understanding of how to optimize your web applications for performance and user experience.",
      [Chapters.TAILWIND]:
        "Join us in exploring the world of Tailwind CSS, a popular utility-first CSS framework. This video will demonstrate how to seamlessly integrate Tailwind CSS into your Next.js projects, allowing you to create stylish and responsive user interfaces efficiently. We'll cover key concepts, best practices, and hands-on examples to make styling your applications a breeze.",
      [Chapters.DEFAULT]:
        "Welcome to the ultimate Next.js tutorial series, designed to take you from a beginner to an expert. This comprehensive series will cover everything from the basics to advanced techniques, including routing, authentication, API integration, and more. Whether you're new to Next.js or looking to sharpen your skills, this series has something for everyone on their journey to becoming a Next.js pro."
    };

    return videoDescriptions[title];
  };
  return (
    <div className={styles.detailContainer}>
      <div className={styles.mainSection}>
        <div className={styles.icons}>
          <Button>
            <AiOutlineLike />
          </Button>
          <Button>
            <AiOutlineFolderAdd />
          </Button>
          <Button>
            <AiOutlineShareAlt />
          </Button>
        </div>
        <div className={styles.titleSection}>
          <span className={styles.badge}>Video</span>
          <h2>{title}</h2>
          <div className={styles.titleTags}>
            <div className={styles.titleTag}>
              <BiLoader />
              <span>Expired Event</span>
            </div>
            <div className={styles.titleTag}>
              <AiOutlineCalendar />
              <span>{transformDate(new Date().toString())}</span>
            </div>
            <div className={styles.titleTag}>
              <AiOutlineClockCircle />
              <span>{transformHour(new Date().toString())}</span>
            </div>
          </div>
        </div>
        <div className={styles.sideSection}>
          <h2>Specialties</h2>
          <div className={styles.specialities}>
            <span>#React</span>
            <span>#Nextjs</span>
            <span>#Javascript</span>
            <span>#Front-End</span>
            <span>#Typescript</span>
            <span>#Html</span>
            <span>#Tailwind</span>
            <span>#ServerSide</span>
          </div>
        </div>
      </div>
      <div className={styles.summarySection}>
        <h2>Summary</h2>
        <p>{getDescription(title)}</p>
      </div>
    </div>
  );
}

export default DetailInformation;
