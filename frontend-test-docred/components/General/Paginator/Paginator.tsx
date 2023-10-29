"use client";
import styles from "@/styles/Components/Paginator/Paginator.module.css";
interface Props {
  page: number;
  setPage: (page: number) => void;
  totalData: number;
}
const Paginator = ({ page, setPage, totalData }: Props) => {
  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalData / itemsPerPage);
  const pagesToShow = 5;

  const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  const pages: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const gotoPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className={styles.paginator}>
      <button onClick={() => gotoPage(1)} disabled={page === 1}>
        First
      </button>
      <button onClick={() => gotoPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => gotoPage(p)}
          className={p === page ? styles.active : ""}
        >
          {p}
        </button>
      ))}
      <button onClick={() => gotoPage(page + 1)} disabled={page === totalPages}>
        Next
      </button>
      <button
        onClick={() => gotoPage(totalPages)}
        disabled={page === totalPages}
      >
        Last
      </button>
    </div>
  );
};
export default Paginator;
