import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

interface ReportButtonProps {
  onClick: () => void;
}

export const ReportButton = ({ onClick }: ReportButtonProps) => {
  return (
    <div className="mt-6 flex justify-end">
      <Button
        className="bg-[#fcb408] text-black hover:bg-[#fcb408]/90"
        onClick={onClick}
      >
        <FileDown className="mr-2 h-4 w-4" />
        Gerar Relatório em PDF
      </Button>
    </div>
  );
};