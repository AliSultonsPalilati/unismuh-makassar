interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

export const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow">
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};
