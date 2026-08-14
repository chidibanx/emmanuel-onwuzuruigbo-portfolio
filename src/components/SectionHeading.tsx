interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
    return (
        <div className= "max-w-2xl">
            <h2 className= "text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
            {subtitle && <p className= "mt-3 text-base text-gray-600 sm:text-lg">{subtitle}</p>}
        </div>
    );
};

export default SectionHeading;