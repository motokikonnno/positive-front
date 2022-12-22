import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { InputSearch } from "../components/InputSearch";
import { Layout } from "../components/Layout";
import { PresentList } from "../components/PresentList";
import styles from "../styles/pages/Present.module.scss";

const Present: NextPage = () => {
  const [SearchInputText, setSearchInputText] = useState("");
  const [sort, setSort] = useState("");

  const handleChange = useCallback(
    (e: string) => {
      setSearchInputText(e);
    },
    [SearchInputText]
  );

  const handleSort = useCallback((e: SelectChangeEvent) => {
    setSort(e.target.value)
  }, [sort]);

  return (
    <Layout>
      <div className={styles.background}>
        <h1 className={styles.title}>プレゼントを贈る</h1>
        <div className={styles.InputSearchContainer}>
          <div className={styles.InputSearch}>
            <InputSearch
              handleChange={handleChange}
              searchInputText={SearchInputText}
            />
          </div>
          <div className={styles.selectContainer}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">並び順</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={handleSort}
                className={styles.select}
              >
                <MenuItem value="heigh">レベル高い順</MenuItem>
                <MenuItem value="row">レベル低い順</MenuItem>
                <MenuItem value="new">新着順</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {Peoples.map((people) => {
          return <PresentList people={people} key={people.name} />;
        })}
      </div>
    </Layout>
  );
};

export type People = {
  name: string;
  point: string;
  level: string;
};

export const Peoples: People[] = [
  {
    name: "たけし",
    point: "367",
    level: "12",
  },
  {
    name: "まさし",
    point: "61",
    level: "2",
  },
  {
    name: "さちこ",
    point: "891",
    level: "23",
  },
  {
    name: "かずき",
    point: "1024",
    level: "27",
  },
];

export default Present;
