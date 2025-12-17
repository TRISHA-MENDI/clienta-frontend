// src/components/dashboard/ProjectsSection.jsx
import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Avatar,
  Box,
  AvatarGroup
} from "@mui/material";

/**
 * ProjectsSection
 * - Provides 4 aligned project cards with consistent image ratio
 * - Replaces broken images with a fallback
 */

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80&auto=format&fit=crop&s=placeholder";

const projects = [
  {
    id: 1,
    tag: "Project #2",
    title: "Modern",
    desc: "As Uber works through a huge amount of internal management turmoil.",
    img:
      "https://images.unsplash.com/photo-1505691723518-36a1a0f8f44b?q=80&w=1000&auto=format&fit=crop&s=modern"
  },
  {
    id: 2,
    tag: "Project #1",
    title: "Scandinavian",
    desc: "Music is something that everyone has their own specific opinion about.",
    img:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1000&auto=format&fit=crop&s=scandi"
  },
  {
    id: 3,
    tag: "Project #3",
    title: "Minimalist",
    desc: "Different people have different taste, and various types of music.",
    img:
      "https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1000&auto=format&fit=crop&s=minimalist"
  },
  {
    id: 4,
    tag: "Project #4",
    title: "Gothic",
    desc: "Why would anyone pick blue over pink? Pink is obviously a better color.",
    img:
      "https://images.unsplash.com/photo-1505691723518-36a1a0f8f44b?q=80&w=1000&auto=format&fit=crop&s=gothic"
  }
];

// small helper to render circle avatars for each card
const sampleAvatars = [
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=20",
  "https://i.pravatar.cc/150?img=45"
];

export default function ProjectsSection() {
  const handleImgError = (e) => {
    e.currentTarget.src = DEFAULT_IMG;
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Projects
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Architects design houses
        </Typography>
      </Box>

      {/* Cards */}
      <Grid container spacing={3}>
        {projects.map((p, idx) => (
          <Grid item xs={12} sm={6} md={3} key={p.id}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}
            >
              {/* image with fixed aspect ratio (16:12) so all cards align */}
              <Box
                sx={{
                  position: "relative",
                  pt: "56.25%", // 16:9 -> 56.25% (adjust if you want taller)
                  overflow: "hidden",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  backgroundColor: "background.paper"
                }}
              >
                <CardMedia
                  component="img"
                  src={p.img}
                  alt={p.title}
                  onError={handleImgError}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1, pt: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  {p.tag}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ mt: 1, fontWeight: 700, mb: 1 }}
                  component="h3"
                >
                  {p.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {p.desc}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 2,
                  pb: 2
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    borderColor: "primary.main",
                    color: "primary.main"
                  }}
                >
                  VIEW PROJECT
                </Button>

                <AvatarGroup max={4}>
                  {/* show different avatars per card (rotate sample list) */}
                  {sampleAvatars
                    .slice(idx, idx + 3)
                    .concat(sampleAvatars.slice(0, Math.max(0, 3 - (sampleAvatars.length - idx))))
                    .slice(0, 4)
                    .map((a, i) => (
                      <Avatar
                        key={i}
                        src={a}
                        sx={{ width: 32, height: 32, border: "2px solid #fff" }}
                      />
                    ))}
                </AvatarGroup>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
