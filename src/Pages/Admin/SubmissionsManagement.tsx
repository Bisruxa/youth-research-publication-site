import Navbar from "@/Components/Admin/Navbar";
import Sidebar from "@/Components/Admin/Sidebar";
import { Button } from "@/Components/LandingpageComponenets/button";
import { Input } from "@/Components/LandingpageComponenets/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/LandingpageComponenets/table";
import { Badge } from "@/Components/LandingpageComponenets/badge";
import { Search, Filter, UserPlus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/LandingpageComponenets/select";

const SubmissionsManagement = () => {
  const submissions = [
    {
      id: 1,
      title: "Machine Learning Applications in Healthcare",
      author: "John Doe",
      reviewer: "Dr. Sarah Johnson",
      status: "In Review",
      date: "2025-01-05",
    },
    {
      id: 2,
      title: "Quantum Computing Algorithms",
      author: "Michael Chen",
      reviewer: "Prof. David Lee",
      status: "Approved",
      date: "2024-12-28",
    },
    {
      id: 3,
      title: "Climate Change Impact Studies",
      author: "Emily Wang",
      reviewer: "Dr. Sarah Johnson",
      status: "Pending",
      date: "2025-01-08",
    },
    {
      id: 4,
      title: "Blockchain Security Analysis",
      author: "Robert Brown",
      reviewer: "-",
      status: "Pending",
      date: "2025-01-09",
    },
    {
      id: 5,
      title: "Neural Network Optimization",
      author: "John Doe",
      reviewer: "Prof. David Lee",
      status: "Rejected",
      date: "2025-01-02",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "default";
      case "In Review":
        return "secondary";
      case "Pending":
        return "outline";
      case "Rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Submissions Management</h2>
              <p className="text-muted-foreground mt-1">Track and manage research submissions</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search submissions by title or author..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-review">In Review</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="border rounded-lg bg-card shadow-sm overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Reviewer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium max-w-[300px]">{submission.title}</TableCell>
                      <TableCell className="text-muted-foreground">{submission.author}</TableCell>
                      <TableCell className="text-muted-foreground">{submission.reviewer}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(submission.status)}>{submission.status}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{submission.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Select>
                            <SelectTrigger className="w-[140px] h-8 text-xs">
                              <SelectValue placeholder="Update status" />
                            </SelectTrigger>
                            <SelectContent className="bg-popover">
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="in-review">In Review</SelectItem>
                              <SelectItem value="approved">Approved</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button variant="outline" size="sm" className="h-8">
                            <UserPlus className="h-3 w-3 mr-1" />
                            Assign
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SubmissionsManagement;
