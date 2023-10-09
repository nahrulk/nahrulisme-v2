"use client";

interface Props {
  children?: React.ReactNode;
}

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps): React.ReactNode {
  return <>{children}</>;
}
