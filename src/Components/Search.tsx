import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

interface SearchProps {
  onSubmit: (q: string) => void;
}

export const Search = ({ onSubmit }: SearchProps) => {
  const [search, setSearch] = useState("");
  return (
    <Box mt={30}>
      <Input onChange={(e) => setSearch(e.target.value)} value={search}></Input>
      <Button onClick={() => onSubmit(search)}>Search for {search}</Button>
    </Box>
  );
};
