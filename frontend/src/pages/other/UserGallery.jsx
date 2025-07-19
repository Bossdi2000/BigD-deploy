"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// Core member IDs to exclude
const coreMemberIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21];

const UserGallery = () => {
  const [items, setItems] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMessage, setSearchMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const itemRefs = useRef({});

  // Fetch gallery items from backend
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/gallery/all");
        const mappedItems = response.data
          .filter((item) => !coreMemberIds.includes(item.id))
          .map((item) => ({
            id: item.id,
            images: [item.image_url || "/placeholder.svg"],
            bio: {
              name: item.name,
              title: item.role,
              description: item.quote,
              highlights: [], // No highlights in backend data
            },
          }));
        setItems(mappedItems);
        setExpanded(Array(mappedItems.length).fill(false));
        setError("");
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load user profiles. Please try again later.");
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchGalleryItems();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchMessage("");
  };

  // Perform search and scroll to user
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchMessage("Please enter a username to search.");
      return;
    }

    const matchedItem = items.find(
      (item) =>
        item.bio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.bio.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.bio.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matchedItem) {
      const matchedIndex = items.indexOf(matchedItem);
      setStartIndex(Math.floor(matchedIndex / 3) * 3);
      setTimeout(() => {
        if (itemRefs.current[matchedItem.id]) {
          itemRefs.current[matchedItem.id].scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
      setSearchMessage("");
    } else {
      setSearchMessage("No user found with that name, role, or description.");
    }
  };

  // Toggle "See More" / "See Less"
  const toggleBio = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  // Handle Next button
  const handleNext = () => {
    setStartIndex((prev) => {
      const newIndex = prev + 3;
      return newIndex + 3 > items.length ? 0 : newIndex;
    });
  };

  // Handle Previous button
  const handlePrev = () => {
    setStartIndex((prev) => {
      const newIndex = prev - 3;
      return newIndex < 0 ? Math.max(0, items.length - 3) : newIndex;
    });
  };

  // Get visible items
  const visibleItems = items.slice(startIndex, startIndex + 3);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#010B13",
        position: "relative",
        padding: "80px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Background Effects */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "200px",
            height: "200px",
            background: "rgba(255, 140, 0, 0.1)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            background: "rgba(168, 85, 247, 0.1)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", width: "100%", padding: "0 2rem" }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 16px 0",
            }}
          >
            Meet Our <span style={{ color: "#FF8C00" }}>Sign Community</span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Explore the vibrant contributions of our community members in the Sign ecosystem
          </p>
        </motion.div>

        {/* Loading and Error States */}
        {loading && (
          <p style={{ color: "white", textAlign: "center", fontSize: "18px" }}>Loading user profiles...</p>
        )}
        {error && (
          <p style={{ color: "#FF4444", textAlign: "center", fontSize: "18px", marginBottom: "40px" }}>
            {error}
          </p>
        )}

        {/* Search Bar */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "40px", textAlign: "center" }}
          >
            <form onSubmit={handleSearch} style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by username, role, or description..."
                style={{
                  padding: "12px 20px",
                  width: "300px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "white",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                style={{
                  padding: "12px 20px",
                  background: "#FF8C00",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Search
              </motion.button>
            </form>
            {searchMessage && (
              <p style={{ color: "#FF8C00", marginTop: "12px", fontSize: "14px" }}>{searchMessage}</p>
            )}
          </motion.div>
        )}

        {/* Navigation Buttons */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "40px", display: "flex", justifyContent: "center", gap: "16px" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/add-profile")}
              style={{
                padding: "12px 24px",
                background: "#FF8C00",
                borderRadius: "8px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 5px 15px rgba(255, 140, 0, 0.3)",
              }}
            >
              Add Your Profile
            </motion.button>
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "12px 24px",
                  background: "#1976d2", // Use theme primary color
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 5px 15px rgba(25, 118, 210, 0.3)",
                }}
              >
                View Core Members
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Gallery Container */}
        {!loading && items.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "24px",
              position: "relative",
              alignItems: "center",
            }}
          >
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              style={{
                position: "absolute",
                left: "-60px",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "12px 20px",
                background: "#FF8C00",
                borderRadius: "50px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 5px 15px rgba(255, 140, 0, 0.3)",
                zIndex: 10,
              }}
            >
              Prev
            </motion.button>

            {/* Gallery Items */}
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.id}
                ref={(el) => (itemRefs.current[item.id] = el)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  padding: "16px",
                  width: "33%",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  {/* Image Area */}
                  <div style={{ width: "100%" }}>
                    <img
                      src={item.images[0]}
                      alt={`User Profile ${item.id}`}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop";
                      }}
                    />
                  </div>

                  {/* Bio/Profile Details */}
                  <div
                    style={{
                      width: "100%",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <h4 style={{ margin: "0 0 8px", fontSize: "18px", fontWeight: "600" }}>
                      {item.bio.name}
                    </h4>
                    <p style={{ margin: "0 0 8px", fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
                      {item.bio.title}
                    </p>
                    <p
                      style={{
                        margin: "0 0 8px",
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.9)",
                        display: "-webkit-box",
                        WebkitLineClamp: expanded[startIndex + index] ? "unset" : 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.bio.description}
                    </p>
                    {expanded[startIndex + index] && item.bio.highlights?.length > 0 && (
                      <ul
                        style={{
                          margin: "0 0 8px",
                          paddingLeft: "20px",
                          fontSize: "14px",
                          color: "rgba(255, 255, 255, 0.9)",
                          textAlign: "left",
                          listStyleType: "disc",
                        }}
                      >
                        {item.bio.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleBio(startIndex + index)}
                      style={{
                        padding: "6px 12px",
                        background: "#FF8C00",
                        borderRadius: "8px",
                        color: "white",
                        fontSize: "14px",
                        border: "none",
                        cursor: "pointer",
                        marginTop: "8px",
                        width: "100%",
                      }}
                    >
                      {expanded[startIndex + index] ? "See Less" : "See More"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              style={{
                position: "absolute",
                right: "-60px",
                top: "50%",
                transform: "translateY(-50%)",
                padding: "12px 20px",
                background: "#FF8C00",
                borderRadius: "50px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 5px 15px rgba(255, 140, 0, 0.3)",
                zIndex: 10,
              }}
            >
              Next
            </motion.button>
          </div>
        )}

        {/* Empty State */}
        {!loading && items.length === 0 && !error && (
          <p style={{ color: "white", textAlign: "center", fontSize: "18px" }}>
            No user profiles found. Be the first to add yours!
          </p>
        )}

        {/* Navigation Indicators */}
        {!loading && items.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "40px",
            }}
          >
            {Array.from({ length: Math.ceil(items.length / 3) }).map((_, index) => (
              <div
                key={index}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: Math.floor(startIndex / 3) === index ? "#FF8C00" : "rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
                onClick={() => setStartIndex(index * 3)}
              />
            ))}
          </div>
        )}

        {/* Track Your SBT Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: "60px",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 16px 0",
            }}
          >
            Track Your SBT
          </h3>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.7)",
              margin: "0 0 24px 0",
              lineHeight: "1.6",
            }}
          >
            Monitor your Soulbound Tokens (SBTs) with our dedicated tracker. Stay updated on your contributions and
            achievements within the Sign ecosystem.
          </p>
          <motion.a
            href="https://mytrack-alpha.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#FF8C00",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 5px 15px rgba(255, 140, 0, 0.3)",
              cursor: "pointer",
            }}
          >
            Track Your SBT
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default UserGallery;