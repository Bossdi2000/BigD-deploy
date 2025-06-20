"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

// Static gallery items
const galleryItems = [
  {
    id: 1,
    images: [
      "/OG1.jpeg",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464822759844-d150baec3543?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Tajudeen",
      title: "King of Sign",
      description:
        "Tajudeen (@Tajudeen_10) is a key figure in the Sign Protocol ecosystem, known for his passionate advocacy, educational efforts, and leadership. Crowned the 'King of Sign,' he inspires engagement and unity across the global Sign community.",
      highlights: [
        "Community Builder: Leads with energy and purpose, helping Signees connect and grow.",
        "Web3 Educator: Simplifies Sign concepts through accessible X posts.",
        "Cultural Voice: Ties cultural moments (e.g., Eid) to Sign values like patience and renewal.",
        "SBT Holder: Proud 'Seeing Signs' SBT holder, driving momentum toward the TGE.",
        "Global Connector: Mobilizes communities from Nigeria to China, supporting global alliances like C✦B✦L.",
        "🧡👁️ His signature emojis reflect his vibrant and watchful presence in the ecosystem.",
      ],
    },
  },
  {
    id: 2,
    images: [
      "/OG2.jpeg",
      "https://images.unsplash.com/photo-1498557850523-fd3f1f96d936?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521747116048-1e37f4882501?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Hime Sama",
      title: "Queen of Sign",
      description:
        "Hime Sama (@himeSama_01) known as the 'Queen of Sign,' is a standout figure in the Sign Protocol community. As an early adopter and dedicated supporter, she blends mystery, humor, and leadership to inspire global engagement. She shares key updates on the Sign SuperApp, making complex features like Orange Points easy to understand. Himesama also leads fun community challenges, promotes international unity—especially with countries like Bangladesh and Japan—and keeps the vibe strong across platforms like Telegram.",
      highlights: [
        "With her signature sunglasses, orange heart 🧡, and approachable style, Himesama plays a vital role in building a vibrant, inclusive Sign Dynasty.",
      ],
    },
  },
  {
    id: 3,
    images: [
      "/OG3.jpeg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517817748491-0d2f7f0b0d6c?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Frans-TP",
      title: "Sign Superhero",
      description:
        "Frans TP (@FransTp0) is a steadfast force and creative spirit within the SIGN community, earning the title of Sign Superhero for his unwavering dedication, unifying presence, and visionary mindset. Known for turning belief into bold action, Frans doesn't just support SIGN—he embodies it. With a heart full of purpose and a mind anchored in growth, Frans weaves imagination into impact, helping shape SIGN into more than just a movement—it's a space where ambition meets authenticity.",
      highlights: ["His journey reflects the core SIGN ethos: becoming, building, and belonging."],
    },
  },
  {
    id: 4,
    images: [
      "/OG4.jpeg",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511300636513-e009f0b37c2e?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Big Gids",
      title: "Founder, Sign Academy HQ | DevRel & Community Leader",
      description:
        "Big Gids (@_biggids) drives education and empowerment in the Sign ecosystem, having launched Sign Academy HQ, a community-led initiative demystifying Web3 and personal growth. Known for hosting impactful spaces on topics like tokenomics and leadership, he bridges developers and users with Sign's tools, fostering innovation, transparency, and growth.",
      highlights: [],
    },
  },
  {
    id: 5,
    images: [
      "/OG5.jpeg",
      "https://images.unsplash.com/photo-1538370965046-9667d6997d9f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "clairemxd.eth",
      title: "The 'Product' Turtle",
      description:
        "clairemxd.eth (@ClaireMa12) is a core contributor to the Sign ecosystem, championing tools like the TokenTable Standard Spreadsheet, helping founders simplify pre-TGE planning. Known for creative, community-first initiatives—like interactive SIGN token giveaways and bilingual insights on airdrops and token design—they blend strategic depth with playful engagement to drive Sign's mission forward.",
      highlights: ["Tokenomics Strategist | Community Builder | Bilingual Creator"],
    },
  },
  {
    id: 6,
    images: [
      "/OG6.jpeg",
      "https://images.unsplash.com/photo-1519125323398-675f0b0d1d1e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Oxbossj",
      title: "Wizard of Sign",
      description:
        "Oxbossj (@Oxbossj) is a prominent figure in the Sign community, known for creative advocacy, visual design, and community building. Self-styled as the 'Wizard of Sign,' he promotes tools like SignPass and TokenTable while collaborating with key leaders to expand the ecosystem. His mix of astrology and Web3 education, paired with strong visual branding, makes him a standout advocate for decentralized identity.",
      highlights: [],
    },
  },
  {
    id: 7,
    images: [
      "/OG7.jpeg",
      "https://images.unsplash.com/photo-1519337265831-2f6e5b1c2f5e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1481456384065-0e6e6a6d6e9d?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Haikeys",
      title: "Core Presence of Sign",
      description:
        "Haikeys (@Haikeystweett) is a core presence in the Sign Protocol ecosystem, known for turning energy into momentum. Through consistent engagement on X, Haikeys uplifts the $SIGN token, sparks meaningful conversations, and energizes the community with events like Orange Hour. Their content blends education with enthusiasm, helping new users understand the value of decentralized identity while strengthening Sign's cultural identity.",
      highlights: [
        "A creative force in the space, Haikeys embodies what it means to lead from within the community—authentic, committed, and always amplifying the orange signal.",
      ],
    },
  },
  {
    id: 8,
    images: [
      "/OG8.jpeg",
      "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Lucky Esemuede",
      title: "Lucky of Sign",
      description:
        "Lucky Esemuede (@Lucky_of_Web3) is one of the most dedicated ambassadors for Sign Protocol. As a passionate Web3 enthusiast and Sign Protocol Ambassador, he uses his platform not only to share updates but to energize and educate the community about decentralized attestations. From participating in quizzes to highlighting key milestones like testnet launches, he consistently amplifies Sign's progress.",
      highlights: [
        "Lucky is a frontline communicator who bridges the protocol and its users, helping spread awareness, drive adoption, and foster an informed, vibrant network.",
      ],
    },
  },
  {
    id: 9,
    images: [
      "/OG9.jpeg",
      "https://images.unsplash.com/photo-1517817748491-0d2f7f0b0d6c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1487621167305-00c5a02a9692?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Thoth",
      title: "Sensei of Sign",
      description:
        "Thoth (@Trojan_Bus1) brings a strategic and technical focus to the Sign Protocol ecosystem. He actively promotes Sign's developer-friendly features and highlights the protocol's strengths in enabling attestation-based dApps. He engages with community initiatives such as AMA sessions and on-chain quizzes, sharing technical updates in an accessible way.",
      highlights: [
        "His thoughtful, consistent support ensures Sign remains visible, relevant, and powerful for developers and builders.",
      ],
    },
  },
  {
    id: 10,
    images: [
      "/OG10.jpeg",
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Angel",
      title: "Angel of Sign",
      description:
        "Angel (@AngelofWeb3_) adds depth and clarity to the Sign Protocol community. She shares educational threads, participates in events, and engages with supporters to translate technical innovations into easy-to-understand insights. Her posts build culture and community spirit, demystifying Web3 for newcomers and experts alike.",
      highlights: [
        "With a passion for decentralized trust, Angel acts as a catalyst for momentum and understanding, reminding us that education is as important as code in Web3.",
      ],
    },
  },
  {
    id: 11,
    images: [
      "/OG11.jpeg",
      "https://images.unsplash.com/photo-1501820488136-726691f350b6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-8f3d2944e5c8?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Truth",
      title: "Truth of Sign",
      description:
        "Truth (@TruthOnchained) is a passionate advocate for the SIGN ecosystem, known for his deep commitment to the vision of Sign Academy. His consistent engagement and clear dedication have made him a respected voice within the community.",
      highlights: [
        "Often called the 'Truth of Sign,' he represents the values of transparency, purpose, and decentralization—playing a meaningful role in the growth of the movement.",
      ],
    },
  },
  {
    id: 12,
    images: [
      "/OG12.jpeg",
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c86b9e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1494500764479-0c8ad7b6a3e4?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Jerry Z",
      title: "Crypto Visionary of Sign",
      description:
        "Jerry Z (@Jerry_ZZQ) a long-time crypto investor and passionate decentralization advocate, is known for his articulate, balanced takes on emerging Web3 protocols. Since discovering Sign in 2024, he has consistently highlighted its potential to disrupt centralized social platforms, praising its community-first tokenomics and cross-chain vision. With regular posts analyzing $SIGN's roadmap, AMAs with the team, and referral program boosts, Jerry's influence bridges both technical insight and community enthusiasm.",
      highlights: [
        "His authenticity and transparency—openly sharing his investment journey with $SIGN—make him a trusted voice among early adopters.",
      ],
    },
  },
  {
    id: 13,
    images: [
      "/OG13.jpeg",
      "https://images.unsplash.com/photo-1503431128871-8d6aada8853b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5845?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Immanuel_Web3",
      title: "Builder of Sign",
      description:
        "Immanuel (@Web3Immanuel) is a respected Web developer with a strong focus on blockchain usability and privacy. Based in Dubai, he combines deep technical knowledge with a passion for education. Immanuel has hosted community X Spaces, contributed to Sign's open-source front-end, and authored widely shared threads breaking down Sign's zero-knowledge proof system and L2 integration. As an active Telegram moderator and DAO participant, his leadership goes beyond social media—he's shaping Sign's developer and governance ecosystems.",
      highlights: ["His contributions make Sign more robust for developers and users alike."],
    },
  },
  {
    id: 14,
    images: [
      "/OG14.jpeg",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "LJ",
      title: "Meme Master of Sign",
      description:
        "LJ (@lj_xbt) brings energy, memes, and momentum to the Sign community. A self-declared crypto maximalist always on the lookout for 100x opportunities, he was among the first to call $SIGN a 'top altcoin pick for 2025.' His viral content—charts, memes, and milestone celebrations—has helped introduce Sign to wider retail audiences. Whether attending virtual meetups or sharing bullish projections, LJ amplifies the spirit of Sign's decentralized revolution with infectious enthusiasm and relatable content.",
      highlights: ["LJ's vibrant presence fuels Sign's visibility and community engagement."],
    },
  },
  {
    id: 17,
    images: [
      "/OG17.jpeg",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321497487-48f3d94f7b95?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "DvM",
      title: "Developer Advocate of Sign",
      description:
        "DvM (@DvmOnChain) focuses on blockchain infrastructure and developer tools. They engage with Sign Protocol by exploring its on-chain attestation systems, testing TokenTable integrations, and contributing technical insights. Passionate about Sign's scalability, they often share feedback, highlight developer bounties, and support its open-source growth. Sign's 300M+ attestations prove its real-world value—and DvmOnChain is bullish on where it's headed.",
      highlights: [
        "Contributes technical insights and feedback to enhance Sign's scalability.",
        "Promotes developer bounties and open-source growth.",
      ],
    },
  },
  {
    id: 18,
    images: [
      "/OG18.jpeg",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Asta",
      title: "Crypto Enthusiast of Sign",
      description:
        "Asta (@_AstaCrypt) is passionate about crypto, security, and user-friendly tools in Web3. They support Sign Protocol by using and promoting features like TokenTable and SignPass, sharing their experience signing on-chain agreements, emphasizing the ease and potential of $SIGN, and participating in community events. Their goal is to help more users discover Sign's power and accessibility.",
      highlights: [
        "Promotes TokenTable and SignPass through hands-on use.",
        "Engages in community events to boost Sign's accessibility.",
      ],
    },
  },
  {
    id: 19,
    images: [
      "/OG19.jpeg",
      "https://images.unsplash.com/photo-1500534623283-312aada8853b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518676590629-3dcbd9c86b9e?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Emmanuel David",
      title: "Standout Voice of Sign Community",
      description:
        "Emmanuel David (@EmmanuelDa26818) is one of the standout voices in the Sign community. With a genuine love for football, a strong interest in tech, and a deep connection to Nigerian culture, he creates content that feels both insightful and relatable. Inspired by the Sign Intern program and encouraged by a vibrant, supportive community, Emmanuel has become known for his engaging posts that spark conversation, share knowledge, and bring people together. His style is warm, witty, and down-to-earth—making complex topics feel easy and enjoyable. More than just a content creator, Emmanuel plays a key role in helping Sign stay true to its mission: to educate, empower, and connect.",
      highlights: [
        "Creates relatable content blending football, tech, and Nigerian culture.",
        "Drives engagement through the Sign Intern program.",
        "Supports Sign's mission to educate and connect.",
      ],
    },
  },
  {
    id: 20,
    images: [
      "/OG20.jpeg",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "BigD",
      title: "Genius of Sign",
      description:
        "BigD (@_BigDe) known as the Genius of Sign, takes pride in being part of the heartbeat behind this movement. With a mix of creativity, technical skill, and community energy, they help shape what Sign is and where it's headed. Whether building quietly or lighting up the timeline with orange fire, their commitment is constant. They don't just support Sign—they live it, breathe it, and push it forward every day.",
      highlights: [
        "Shapes Sign's future with creativity and technical expertise.",
        "Drives community energy with consistent engagement.",
      ],
    },
  },
  {
    id: 21,
    images: [
      "/OG21.jpeg",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Debere",
      title: "Goddess of Sign",
      description:
        "Debere (@Chi_Debere) shows up every day with love, style, and purpose. As a nail technician and a proud voice in this movement, she brings beauty, strength, and belief to everything she does. Sign isn't just a platform to her—it's a vibe, a vision, a family. Through every post, every moment, she's here to remind the world: Sign is here to stay, and she's standing at the front with her orange flag held high.",
      highlights: [
        "Brings style and purpose as a nail technician and Sign advocate.",
        "Amplifies Sign's vision as a community-driven movement.",
      ],
    },
  },
  {
    id: 22,
    images: [
      "/OG22.jpg",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "The Leaf Guy",
      title: "Developer & Community Curator",
      description:
        "The Leaf Guy (@igbomalam) is a vibrant force in the Sign community, equal parts developer, culture curator, and community spark. Known for his engaging, hype-filled style and a strong connection to his roots, he brings a unique flavor to the Orange Dynasty. As a developer, he blends technical insight with an easygoing, conversational tone that makes Sign's ecosystem feel both powerful and approachable. Whether he's breaking down ideas, pushing out call-to-action posts, or simply yapping with the crew, he knows how to keep things moving and meaningful. He infuses his presence with Naija pride, Web3 optimism, and a deep belief in Sign's values of freedom, integrity, and prosperity, always showing up as both a builder and a believer.",
      highlights: [
        "Blends technical development skills with engaging community leadership.",
        "Brings Naija pride and Web3 optimism to the Orange Dynasty.",
        "Advocates for Sign's values of freedom, integrity, and prosperity.",
      ],
    },
  },
  {
    id: 23,
    images: [
      "/OG23.jpg",
      "https://images.unsplash.com/photo-2507842217343-583bb7270b66?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
    ],
    bio: {
      name: "Shinniegal",
      title: "Founder, Sign Señoritas & Sign Health | The Orange Dynasty",
      description:
        "Shinniegal (@ShinniegalX) onboards women into crypto, builds legacies on Sign, and leads a global sisterhood where connection has purpose. On Feb 21, 2024, she launched Sign Señoritas—creating spaces to educate, gist, grow, and guide women from Web2 into Web3 opportunities. She's not just building communities—she's powering dynasties of growth, wellness, and empowerment. Her first sub-community, Sign Health, pioneers Web3 wellness through on-chain care and real-world healing. More sub-communities are rising, all rooted in unity, love, and creativity. With The Orange Dynasty as her heartbeat, she believes in collaboration over competition, where every woman shines, every voice matters, and the future is ours to shape—together.",
      highlights: [
        "Founded Sign Señoritas on Feb 21, 2024, onboarding women into Web3.",
        "Leads Sign Health, pioneering Web3 wellness and on-chain care.",
        "Champions collaboration over competition in building women-focused communities.",
      ],
    },
  },
]

const Gallery = () => {
  const [items, setItems] = useState(galleryItems)
  const [expanded, setExpanded] = useState(Array(galleryItems.length).fill(false))
  const [startIndex, setStartIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchMessage, setSearchMessage] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()
  const itemRefs = useRef({})

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Safeguard startIndex
  useEffect(() => {
    if (startIndex >= items.length) {
      setStartIndex(0)
    } else if (startIndex < 0) {
      setStartIndex(Math.max(0, items.length - (isMobile ? 1 : 3)))
    }
  }, [startIndex, items.length, isMobile])

  // Function to extract Twitter handle from description
  const getTwitterHandle = (description) => {
    const match = description.match(/@([a-zA-Z0-9_]+)/)
    return match ? match[1] : null
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setSearchMessage("")
  }

  // Perform search and scroll to user
  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      setSearchMessage("Please enter a username to search.")
      return
    }

    const matchedItem = items.find(
      (item) =>
        item.bio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.bio.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.bio.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    if (matchedItem) {
      const matchedIndex = items.indexOf(matchedItem)
      setStartIndex(isMobile ? matchedIndex : Math.floor(matchedIndex / 3) * 3)
      setTimeout(() => {
        if (itemRefs.current[matchedItem.id]) {
          itemRefs.current[matchedItem.id].scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
        }
      }, 100)
      setSearchMessage("")
    } else {
      setSearchMessage("No user found with that name, role, or description.")
    }
  }

  // Toggle "See More" / "See Less"
  const toggleBio = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev]
      newExpanded[index] = !newExpanded[index]
      return newExpanded
    })
  }

  // Handle Next button
  const handleNext = () => {
    setStartIndex((prev) => {
      const itemsPerPage = isMobile ? 1 : 3
      const newIndex = prev + itemsPerPage
      return newIndex >= items.length ? 0 : newIndex
    })
  }

  // Handle Previous button
  const handlePrev = () => {
    setStartIndex((prev) => {
      const itemsPerPage = isMobile ? 1 : 3
      const newIndex = prev - itemsPerPage
      return newIndex < 0 ? Math.max(0, items.length - itemsPerPage) : newIndex
    })
  }

  // Get visible items based on screen size
  const itemsPerPage = isMobile ? 1 : 3
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#010B13",
        position: "relative",
        padding: isMobile ? "80px 0 40px 0" : "60px 0", // Account for navbar on mobile
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Background Effects */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: isMobile ? "5%" : "10%",
            width: isMobile ? "150px" : "200px",
            height: isMobile ? "150px" : "200px",
            background: "rgba(255, 140, 0, 0.1)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: isMobile ? "5%" : "10%",
            width: isMobile ? "200px" : "300px",
            height: isMobile ? "200px" : "300px",
            background: "rgba(168, 85, 247, 0.1)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: isMobile ? "100%" : "1200px",
          width: "100%",
          padding: isMobile ? "0 16px" : "0 1rem",
          boxSizing: "border-box",
        }}
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: isMobile ? "30px" : "40px" }}
        >
          <h2
            style={{
              fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 12px 0",
              lineHeight: "1.2",
            }}
          >
            Meet Our <span style={{ color: "#FF8C00" }}>Sign Dynasty</span>
          </h2>
          <p
            style={{
              fontSize: isMobile ? "14px" : "clamp(14px, 2vw, 16px)",
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: isMobile ? "100%" : "600px",
              margin: "0 auto",
              lineHeight: "1.5",
              padding: isMobile ? "0 10px" : "0",
            }}
          >
            Discover the amazing journeys of our core community members and their success stories with Sign
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: isMobile ? "24px" : "32px", textAlign: "center" }}
        >
          <form
            onSubmit={handleSearch}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
              gap: isMobile ? "12px" : "16px",
              maxWidth: isMobile ? "100%" : "500px",
              margin: "0 auto",
            }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by username, role..."
              style={{
                padding: isMobile ? "10px 16px" : "12px 20px",
                width: isMobile ? "100%" : "280px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.05)",
                color: "white",
                fontSize: isMobile ? "14px" : "16px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <motion.button
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={{
                padding: isMobile ? "10px 20px" : "12px 24px",
                background: "#FF8C00",
                borderRadius: "8px",
                color: "white",
                fontSize: isMobile ? "14px" : "16px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                width: isMobile ? "100%" : "auto",
                boxSizing: "border-box",
              }}
            >
              Search
            </motion.button>
          </form>
          {searchMessage && (
            <p style={{ color: "#FF8C00", marginTop: "8px", fontSize: isMobile ? "12px" : "14px" }}>{searchMessage}</p>
          )}
        </motion.div>

        {/* Add Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: isMobile ? "24px" : "32px" }}
        >
          <motion.button
            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("#")}
            style={{
              padding: isMobile ? "10px 20px" : "12px 24px",
              background: "#FF8C00",
              borderRadius: "8px",
              color: "white",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(255, 140, 0, 0.3)",
              boxSizing: "border-box",
            }}
          >
            Add Your Profile
          </motion.button>
        </motion.div>

        {/* Gallery Container */}
        {items.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: isMobile ? "center" : "flex-start",
              position: "relative",
              gap: isMobile ? "16px" : "20px",
              width: "100%",
            }}
          >
            {/* Previous Button - Mobile: Above cards, Desktop: Left side */}
            {!isMobile && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                style={{
                  position: "absolute",
                  left: "-50px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  padding: "10px 16px",
                  background: "#FF8C00",
                  borderRadius: "50px",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(255, 140, 0, 0.3)",
                  zIndex: 10,
                }}
              >
                Prev
              </motion.button>
            )}

            {/* Mobile Navigation Buttons */}
            {isMobile && (
              <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                  style={{
                    padding: "8px 16px",
                    background: "#FF8C00",
                    borderRadius: "20px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(255, 140, 0, 0.3)",
                  }}
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  style={{
                    padding: "8px 16px",
                    background: "#FF8C00",
                    borderRadius: "20px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(255, 140, 0, 0.3)",
                  }}
                >
                  Next
                </motion.button>
              </div>
            )}

            {/* Gallery Items Container */}
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "16px" : "20px",
                justifyContent: "center",
                alignItems: isMobile ? "center" : "flex-start",
                width: "100%",
                maxWidth: isMobile ? "100%" : "900px",
              }}
            >
              {/* Gallery Items */}
              {visibleItems.map((item, index) => {
                const twitterHandle = getTwitterHandle(item.bio.description)
                const twitterUrl = twitterHandle ? `https://x.com/${twitterHandle}` : null

                return (
                  <motion.div
                    key={item.id}
                    ref={(el) => (itemRefs.current[item.id] = el)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={
                      isMobile
                        ? {}
                        : {
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.2 },
                          }
                    }
                    style={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      padding: isMobile ? "12px" : "16px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      width: isMobile ? "100%" : "280px",
                      maxWidth: isMobile ? "350px" : "280px",
                      margin: isMobile ? "0 auto" : "0",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: isMobile ? "12px" : "16px",
                      }}
                    >
                      {/* Image Area */}
                      <div style={{ width: "100%" }}>
                        <img
                          src={item.images[0] || "/placeholder.svg"}
                          alt={`Gallery item ${item.id}`}
                          style={{
                            width: "100%",
                            height: isMobile ? "200px" : "220px",
                            objectFit: "cover",
                            borderRadius: "12px",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            boxSizing: "border-box",
                          }}
                          onError={(e) => {
                            e.target.src =
                              "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop"
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
                        <h4
                          style={{
                            margin: "0 0 6px 0",
                            fontSize: isMobile ? "16px" : "18px",
                            fontWeight: "600",
                            lineHeight: "1.2",
                          }}
                        >
                          {item.bio.name}
                        </h4>
                        <p
                          style={{
                            margin: "0 0 8px 0",
                            fontSize: isMobile ? "12px" : "13px",
                            color: "rgba(255, 255, 255, 0.7)",
                            lineHeight: "1.3",
                          }}
                        >
                          {item.bio.title}
                        </p>
                        <p
                          style={{
                            margin: "0 0 8px 0",
                            fontSize: isMobile ? "12px" : "13px",
                            color: "rgba(255, 255, 255, 0.9)",
                            display: "-webkit-box",
                            WebkitLineClamp: expanded[startIndex + index] ? "unset" : 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            lineHeight: "1.4",
                          }}
                        >
                          {item.bio.description}
                        </p>
                        {expanded[startIndex + index] && item.bio.highlights?.length > 0 && (
                          <ul
                            style={{
                              margin: "0 0 8px 0",
                              paddingLeft: "16px",
                              fontSize: isMobile ? "11px" : "12px",
                              color: "rgba(255, 255, 255, 0.9)",
                              textAlign: "left",
                              listStyleType: "disc",
                              lineHeight: "1.4",
                            }}
                          >
                            {item.bio.highlights.map((highlight, i) => (
                              <li key={i} style={{ marginBottom: "4px" }}>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                        <motion.button
                          whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleBio(startIndex + index)}
                          style={{
                            padding: isMobile ? "6px 12px" : "8px 16px",
                            background: "#FF8C00",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: isMobile ? "12px" : "13px",
                            border: "none",
                            cursor: "pointer",
                            marginTop: "8px",
                            width: "100%",
                            boxSizing: "border-box",
                          }}
                        >
                          {expanded[startIndex + index] ? "See Less" : "See More"}
                        </motion.button>
                        {twitterUrl && (
                          <motion.a
                            href={twitterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              display: "block",
                              padding: isMobile ? "6px 12px" : "8px 16px",
                              background: "#FF8C00",
                              borderRadius: "8px",
                              color: "white",
                              fontSize: isMobile ? "12px" : "13px",
                              fontWeight: "600",
                              textDecoration: "none",
                              cursor: "pointer",
                              marginTop: "8px",
                              width: "100%",
                              textAlign: "center",
                              boxSizing: "border-box",
                            }}
                          >
                            Follow on Twitter
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Next Button - Desktop only */}
            {!isMobile && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                style={{
                  position: "absolute",
                  right: "-50px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  padding: "10px 16px",
                  background: "#FF8C00",
                  borderRadius: "50px",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(255, 140, 0, 0.3)",
                  zIndex: 10,
                }}
              >
                Next
              </motion.button>
            )}
          </div>
        )}

        {/* Navigation Indicators */}
        {items.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "6px",
              marginTop: isMobile ? "20px" : "24px",
            }}
          >
            {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
              <div
                key={index}
                style={{
                  width: isMobile ? "6px" : "8px",
                  height: isMobile ? "6px" : "8px",
                  borderRadius: "50%",
                  background: index * itemsPerPage === startIndex ? "#FF8C00" : "rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
                onClick={() => setStartIndex(index * itemsPerPage)}
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
            marginTop: isMobile ? "40px" : "50px",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "16px",
            padding: isMobile ? "20px" : "28px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            maxWidth: isMobile ? "100%" : "500px",
            marginLeft: "auto",
            marginRight: "auto",
            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              fontSize: isMobile ? "1.3rem" : "clamp(1.4rem, 3vw, 1.8rem)",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 12px 0",
              lineHeight: "1.2",
            }}
          >
            Track Your SBT
          </h3>
          <p
            style={{
              fontSize: isMobile ? "14px" : "15px",
              color: "rgba(255, 255, 255, 0.7)",
              margin: "0 0 20px 0",
              lineHeight: "1.5",
            }}
          >
            Monitor your Sign's Soulbound Tokens (SBTs) with our dedicated tracker. Stay updated on your contributions
            and achievements within the Sign ecosystem.
          </p>
          <motion.a
            href="https://mytrack-alpha.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              padding: isMobile ? "10px 20px" : "12px 24px",
              background: "#FF8C00",
              borderRadius: "8px",
              color: "white",
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(255, 140, 0, 0.3)",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            Track Your SBT
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Gallery
