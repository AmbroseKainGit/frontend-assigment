"use client";
import styles from "@/styles/Home/Home.module.css";
import InfoCard from "@/components/Home/Card/InfoCard";
import { useQuery } from "@apollo/client";
import { queryCharacters } from "@/utils/queries";
import { useState } from "react";
import Paginator from "@/components/General/Paginator/Paginator";
import Loader from "@/components/Loader/Loader";
export default function Home() {
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery<CharacterResponse>(queryCharacters, {
    variables: {
      page: page
    }
  });
  if (loading) return <Loader />;
  return (
    <div className={styles.homeContainer}>
      <div className={styles.cardContainer}>
        {data?.characters.results.map((character) => (
          <InfoCard key={character.id} {...character} />
        ))}
      </div>
      {data?.characters.info.count && (
        <Paginator
          page={page}
          setPage={setPage}
          totalData={data?.characters.info.count}
        />
      )}
    </div>
  );
}
