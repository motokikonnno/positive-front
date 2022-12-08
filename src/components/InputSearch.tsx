import styles from "../styles/components/InputSearch.module.scss";
import Image from "next/image";
import React, { FC } from "react";

type InputSearchType = {
  searchInputText: string;
  handleChange: (inputValueText: string) => void;
};

// eslint-disable-next-line react/display-name
export const InputSearch: FC<InputSearchType> = React.memo(({ searchInputText, handleChange }) => {
  return (
    <div className={styles.inputWrap}>

      <div className={styles.inputElement}>
        <Image src={"/icon/search.svg"} width={16} height={16} alt="search" />
      </div>
      <input
        type="text"
        placeholder="検索"
        className={styles.inputSearch}
        value={searchInputText}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />

    </div>
  );
});
