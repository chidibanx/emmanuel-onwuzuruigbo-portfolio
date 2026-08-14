interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base text-gray-600 transition-colors duration-300 sm:text-lg dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;