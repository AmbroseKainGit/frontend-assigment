"use client";
import styles from "@/styles/Home/Home.module.css";
import InfoCard from "@/components/Home/Card/InfoCard";
import { useQuery } from "@apollo/client";
import { queryCharacters } from "@/utils/queries";
import { useState } from "react";
export default function Home() {
  const [page, setPage] = useState(1);
  const { data } = useQuery<CharacterResponse>(queryCharacters, {
    variables: {
      page: page
    }
  });
  return (
    <div className={styles.homeContainer}>
      <div className={styles.cardContainer}>
        {data?.characters.results.map((character) => (
          <InfoCard key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
}
