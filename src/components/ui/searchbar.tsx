"use client";

import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputBase, useMediaQuery } from "@mui/material";
import * as React from "react";

type SearchBarProps = {
  placeholder?: string;
  defaultValue?: string;
  loading?: boolean;
  // eslint-disable-next-line no-unused-vars
  onSearch: (_term: string) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (_term: string) => void;
};

export default function SearchBar({
  placeholder = "Find something...",
  defaultValue = "",
  loading = false,
  onSearch,
  onChangeText,
}: SearchBarProps) {
  const [value, setValue] = React.useState(defaultValue);
  const isXs = useMediaQuery("(max-width:480px)");

  const handleSubmit = React.useCallback(() => {
    onSearch(value.trim());
  }, [value, onSearch]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 720,
        mx: "auto",
      }}
    >
      {/* input pill */}
      <InputBase
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChangeText?.(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        sx={{
          width: "100%",
          height: 56,
          pl: 2.25,
          pr: isXs ? 7 : 14, // ruang buat tombol
          borderRadius: 9999,
          bgcolor: "background.paper",
          border: (t) => `1px solid ${t.palette.divider}`,
          boxShadow: (t) =>
            t.palette.mode === "dark"
              ? "0 2px 10px rgba(0,0,0,.35)"
              : "0 6px 22px rgba(23, 26, 31, .08)",
          transition: "box-shadow .2s, border-color .2s",
          "&:focus-within": {
            borderColor: "primary.main",
            boxShadow: (t) =>
              `0 0 0 4px ${t.palette.primary.main}1f, 0 6px 22px rgba(23,26,31,.08)`,
          },
          fontSize: 16,
        }}
      />

      {/* tombol di kanan, “melekat” ke pill */}
      <Button
        variant="contained"
        disableElevation
        onClick={handleSubmit}
        disabled={loading}
        startIcon={<SearchIcon />}
        sx={{
          position: "absolute",
          top: 6,
          right: 6,
          height: 44,
          borderRadius: 9999,
          px: isXs ? 1.75 : 2.5,
          minWidth: isXs ? 44 : 112,
          textTransform: "none",
          fontWeight: 600,
          bgcolor: (t) =>
            t.palette.mode === "dark" ? t.palette.primary.main : "#1C2B8A",
          "&:hover": {
            bgcolor: (t) =>
              t.palette.mode === "dark" ? t.palette.primary.dark : "#172476",
          },
        }}
      >
        {isXs ? "" : "Search"}
      </Button>

      <Box
        sx={{
          mt: 1.25,
          display: "flex",
          gap: 1,
          justifyContent: "center",
          fontSize: 14,
        }}
      >
        <Box sx={{ opacity: 0.6 }}>Popular help topics:</Box>
        <Box
          component="button"
          onClick={() => {
            const topic = "What's SocialHubs ?";
            setValue(topic);
            onSearch(topic);
          }}
          style={{ all: "unset", cursor: "pointer" }}
          sx={{
            color: "primary.main",
            textDecoration: "underline",
            "&:hover": { opacity: 0.8 },
          }}
        >
          What’s SocialHubs ?
        </Box>
      </Box>
    </Box>
  );
}
