import { useParams, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Calendar,
  User,
  ArrowLeft,
  FileText,
  BookOpen,
  Quote,
  Building,
  Star,
  MessageCircle,
} from "lucide-react";
import "./paperDetail.css";

// Define the API response type based on your backend
interface Paper {
  id: number;
  title: string;
  abstract: string;
  contentUrl: string;
  status: string;
  authorId: number;
  reviewerId: number;
  score: number;
  feedback: string;
  createdAt: string;
  updatedAt: string;
}

export default function PaperDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paper, setPaper] = useState<Paper | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedPapers, setRelatedPapers] = useState<Paper[]>([]);

  // Fetch paper details from API
  useEffect(() => {
    const fetchPaper = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:3000/api/papers/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const paperData = await response.json();
        setPaper(paperData);

        // Fetch related papers (all papers except current one)
        const allPapersResponse = await fetch(
          "http://localhost:3000/api/papers"
        );
        if (allPapersResponse.ok) {
          const allPapers = await allPapersResponse.json();
          const related = allPapers
            .filter((p: Paper) => p.id !== paperData.id)
            .slice(0, 3);
          setRelatedPapers(related);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch paper details"
        );
        console.error("Error fetching paper:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPaper();
    }
  }, [id]);

  const handleViewpaper = () => {
    if (!paper?.contentUrl) {
      alert("paper URL not available");
      return;
    }

    try {
      // Create a temporary anchor element for download
      const link = document.createElement("a");
      link.href = paper.contentUrl;
      link.download = `${paper.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again.");
    }
  };

  const handleRelatedPaperClick = (paperId: number) => {
    navigate(`/paper/${paperId}`);
  };

  // Generate citation based on available data
  const generateCitation = () => {
    if (!paper) return "";

    const year = new Date(paper.createdAt).getFullYear();
    return `Author ${paper.authorId}. (${year}). ${paper.title}. Research Archive.`;
  };

  if (loading) {
    return (
      <div className="paper-detail-page">
        <div className="paper-detail-wrapper">
          <div className="flex justify-center items-center min-h-96">
            <div className="text-lg text-gray-600">
              Loading paper details...
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !paper) {
    return (
      <div className="paper-detail-page">
        <div className="paper-detail-wrapper">
          <div className="paper-not-found">
            <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h2 className="not-found-title">Paper Not Found</h2>
            <p className="not-found-text">
              {error || "The research paper you're looking for doesn't exist."}
            </p>
            <NavLink to="/allresearches" className="back-button">
              <ArrowLeft className="h-4 w-4" />
              Back to Archive
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="paper-detail-page">
      <div className="paper-detail-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="paper-detail-grid"
        >
          {/* Main Content */}
          <div className="paper-main-content">
            {/* Paper Header */}
            <div className="paper-detail-header">
              <h1 className="paper-detail-title">{paper.title}</h1>

              <div className="paper-meta-info">
                <div className="paper-authors-list">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="paper-author">
                    Author ID: {paper.authorId}
                  </span>
                </div>

                <div className="paper-date-info">
                  <Calendar className="h-4 w-4" />
                  {new Date(paper.createdAt).toLocaleDateString()}
                </div>

                <div className="paper-institution-info">
                  <Building className="h-4 w-4" />
                  <span>Reviewer ID: {paper.reviewerId}</span>
                </div>
              </div>

              <div className="paper-stats-info">
                <div className="paper-stat">
                  <Star className="h-4 w-4" />
                  <span>Score: {paper.score}/100</span>
                </div>
                <div
                  className={`paper-status status-${paper.status.toLowerCase()}`}
                >
                  {paper.status}
                </div>
              </div>
            </div>

            {/* Abstract Section */}
            <div className="paper-content-section">
              <h2 className="section-heading">
                <BookOpen className="h-5 w-5" />
                Abstract
              </h2>
              <p className="abstract-content">{paper.abstract}</p>
            </div>

            {/* Feedback Section */}
            <div className="paper-content-section">
              <h2 className="section-heading">
                <MessageCircle className="h-5 w-5" />
                Reviewer Feedback
              </h2>
              <div className="feedback-box">
                <p className="feedback-content">{paper.feedback}</p>
              </div>
            </div>

            {/* Citation Section */}
            <div className="paper-content-section">
              <h2 className="section-heading">
                <Quote className="h-5 w-5" />
                Citation
              </h2>
              <div className="citation-box">
                <div className="citation-type">Recommended Format</div>
                <div className="citation-text">{generateCitation()}</div>
              </div>
            </div>

            {/* Paper Details */}
            <div className="paper-content-section">
              <h2 className="section-heading">Paper Details</h2>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Paper ID:</span>
                  <span className="detail-value">{paper.id}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value">{paper.status}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Review Score:</span>
                  <span className="detail-value">{paper.score}/100</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Created:</span>
                  <span className="detail-value">
                    {new Date(paper.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Last Updated:</span>
                  <span className="detail-value">
                    {new Date(paper.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="paper-sidebar">
            {/* Actions Card */}
            <div className="paper-sidebar-section">
              <h3 className="sidebar-heading">Actions</h3>
              <div className="actions-container">
                <button
                  onClick={handleViewpaper}
                  className="download-button"
                  disabled={!paper.contentUrl}
                >
                  <BookOpen className="h-5 w-5" />
                  {paper.contentUrl ? "View paper" : "Paper url  Not Available"}
                </button>
                <NavLink to="/allresearches" className="back-button">
                  <ArrowLeft className="h-5 w-5" />
                  Back to Archive
                </NavLink>
              </div>
            </div>

            {/* Paper Info Card */}
            <div className="paper-sidebar-section">
              <h3 className="sidebar-heading">Paper Information</h3>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-label">Status:</span>
                  <span
                    className={`info-value status-${paper.status.toLowerCase()}`}
                  >
                    {paper.status}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Review Score:</span>
                  <span className="info-value">{paper.score}/100</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Author ID:</span>
                  <span className="info-value">{paper.authorId}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Reviewer ID:</span>
                  <span className="info-value">{paper.reviewerId}</span>
                </div>
              </div>
            </div>

            {/* Related Papers */}
            <div className="paper-sidebar-section">
              <h3 className="sidebar-heading">Related Papers</h3>
              <div className="related-papers-list">
                {relatedPapers.length > 0 ? (
                  relatedPapers.map((relatedPaper) => (
                    <div
                      key={relatedPaper.id}
                      className="related-paper"
                      onClick={() => handleRelatedPaperClick(relatedPaper.id)}
                    >
                      <div className="related-paper-title">
                        {relatedPaper.title}
                      </div>
                      <div className="related-paper-meta">
                        <span className="related-author">
                          Author {relatedPaper.authorId}
                        </span>
                        <span>Score: {relatedPaper.score}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-related-papers">
                    No related papers found
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
