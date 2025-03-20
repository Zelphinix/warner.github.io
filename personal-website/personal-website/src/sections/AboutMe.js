import {
  Box,
  Avatar,
  Typography,
  Button,
  Card,
  CardContent
} from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
function AboutMe() {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 400,
          textAlign: "center",
          p: 3,
          borderRadius: 3,
          boxShadow: 3
        }}
      >
        <Avatar
          // src="https://i.pravatar.cc/150?img=8"
          sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            Shriya Warner
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Software Engineer | AI Enthusiast
          </Typography>

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
          >
            <Button
              variant="contained"
              startIcon={<Email />}
              href="mailto:shriya@example.com"
            >
              Email
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedIn />}
              href="https://linkedin.com/in"
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHub />}
              href="https://github.com"
              target="_blank"
            >
              GitHub
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AboutMe;
