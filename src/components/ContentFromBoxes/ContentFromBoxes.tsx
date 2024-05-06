import React, { useState, useEffect } from "react";
import Box from "./../Box/Box";
import Pagination from "../Pagination/Pagination";
import styles from "./contentFromBoxes.module.css";
import BlogsServices from "../../services/Blogs";
import Title from "../Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

interface Blog {
  id: string;
  title: string;
  description: string;
  liked: 1 | 0;
}

const ContentFromBoxes: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);
  //   const [error, setError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null as string | null);

  const [totalLiked, setTotalLiked] = useState<number>(0);
  const [totalUnliked, setTotalUnliked] = useState<number>(0);

  const fetchDataAsync = async () => {
    try {
      const fetchedBlogs: Blog[] =
        i18n.language === "en"
          ? await BlogsServices.fetchDataEn()
          : await BlogsServices.fetchDataAr();
      setBlogs(fetchedBlogs);
      updateTotals(fetchedBlogs);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleLike = (id: string) => {
    if (i18n.language === "en") {
      BlogsServices.handleLikeEn(id);
    } else {
      BlogsServices.handleLikeAr(id);
    }
    // window.location.reload();
    fetchDataAsync();
  };

  const handleUnLike = (id: string) => {
    if (i18n.language === "en") {
      BlogsServices.handleUnLikeEn(id);
    } else {
      BlogsServices.handleUnLikeAr(id);
    }
    // window.location.reload();
    fetchDataAsync();
  };
  useEffect(() => {
    fetchDataAsync();
  }, [i18n.language, handleLike, handleUnLike]); // Adding i18n.language to the dependency array

  const updateTotals = (blogs: Blog[]) => {
    const likedCount = blogs.reduce(
      (count, blog) => count + (blog.liked ? 1 : 0),
      0
    );
    setTotalLiked(likedCount);
    setTotalUnliked(blogs.length - likedCount);
  };

  const indexOfLastBlog: number = currentPage * itemsPerPage;
  const indexOfFirstBlog: number = indexOfLastBlog - itemsPerPage;
  const currentBlogs: Blog[] = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>{t("loading")}</div>;
  }

  if (error) {
    return (
      <div>
        {t("error")}: {error}
      </div>
    );
  }

  return (
    <>
      <Title content={t("currentlyBlogs")} />
      <div className={styles.content}>
        <div className={styles.totalLiked}>
          <FontAwesomeIcon icon={faThumbsUp} /> {t("totalLiked")}: {totalLiked}
        </div>
        <div className={styles.totalUnliked}>
          <FontAwesomeIcon icon={faThumbsDown} /> {t("totalUnliked")}:{" "}
          {totalUnliked}
        </div>
      </div>
      <section className={styles.content}>
        {currentBlogs.map((blog) => (
          <Box
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            liked={blog.liked}
            onLike={() => handleLike(blog.id)}
            onUnlike={() => handleUnLike(blog.id)}
          />
        ))}
      </section>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={blogs.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default ContentFromBoxes;
