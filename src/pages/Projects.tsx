import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Layout from "@/components/Layout";
import { FolderKanban, Plus } from "lucide-react";

const Projects = () => {
  // Mock data - replace with real API data later
  const projects = [
    {
      id: 1,
      name: "Project Alpha",
      description: "A revolutionary API management system",
      status: "Active",
      createdAt: "2024-01-04",
    },
    {
      id: 2,
      name: "Project Beta",
      description: "Enhanced security protocols implementation",
      status: "In Progress",
      createdAt: "2024-01-03",
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "User authentication service",
      status: "Planning",
      createdAt: "2024-01-02",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground">Manage your API projects</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderKanban className="h-5 w-5" />
              Project List
            </CardTitle>
            <CardDescription>
              A list of all your API projects and their current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">{project.name}</TableCell>
                    <TableCell>{project.description}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {project.status}
                      </span>
                    </TableCell>
                    <TableCell>{project.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Projects;