import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-red-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-green-600">
            Did you forget to add the page to the router?  <br></br>
            <br></br>

            Or you where looking for something else?   <br></br>  
            <br></br>(looks Suspicious !!!!!🤔)   <br></br> 
           
          </p>

          <p className="mt-4 text-sm text-red-600">
          
            You dont have permission to be Here.
            <br></br>
            
            Get Back to Main page while  you can.   😠
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
