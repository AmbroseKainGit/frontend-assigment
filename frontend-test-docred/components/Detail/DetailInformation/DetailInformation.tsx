"use client";
import styles from "@/styles/Components/DetailInformation/DetailInformation.module.css";
import { Chapters } from "@/types/types";
interface Props {
  title: Chapters;
}
function DetailInformation({ title }: Props) {
  const getDescription = (title: Chapters) => {
    const videoDescriptions = {
      [Chapters.NEXT_JS_FUNDAMENTALS]:
        "In this video, we'll cover the foundational concepts of Next.js, providing you with a strong understanding of what Next.js is and why it's a valuable tool for building modern web applications.",
      [Chapters.CREATING_FIRST_PROJECT]:
        "This tutorial will walk you through the process of setting up your first Next.js project from scratch. You'll learn how to create the essential files and structure to kickstart your web development journey.",
      [Chapters.DATA_FETCHING]:
        "Learn how to fetch data in your Next.js applications. We'll explore various data fetching methods, including server-side rendering, static site generation, and client-side data fetching to make your apps dynamic and interactive.",
      [Chapters.STATIC_DYNAMIC]:
        "Discover the power of static site generation and dynamic rendering with Next.js. We'll explain how to pre-render pages for maximum performance and how to choose between static and dynamic approaches based on your project's requirements.",
      [Chapters.TAILWIND]:
        "Dive into the world of Tailwind CSS, a popular utility-first CSS framework. This video will demonstrate how to integrate and use Tailwind CSS with your Next.js projects, making styling your applications easier and more efficient.",
      [Chapters.DEFAULT]:
        "Welcome to the ultimate Next.js tutorial series, designed to take you from a beginner to an expert. This comprehensive series will cover everything from the basics to advanced techniques, including routing, authentication, API integration, and more. Whether you're new to Next.js or looking to sharpen your skills, this series has something for everyone on their journey to becoming a Next.js pro."
    };

    return videoDescriptions[title];
  };
  return (
    <div className={styles.detailContainer}>
      <div className={styles.mainSection}>
        <div className={styles.titleSection}>
          <span className={styles.badge}>Video</span>
          <h2>{title}</h2>
        </div>
        <div className={styles.sideSection}>
          <h2>Specialties</h2>
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
