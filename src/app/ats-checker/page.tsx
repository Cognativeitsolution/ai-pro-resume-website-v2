import {
  BuildATSfriendlyResume,
  Clarity,
  ConcisenessAndImpact,
  Evaluation,
  Formatting,
  GrammerAndSpelling,
  IssuesFound,
  JobWinningResume,
  ParsedResumeOverview,
  RelevanceOfContent,
  YourScore,
} from "@/components";
// =====================

export default function Page() {
  return (
    <>
      <section className="py-5 md:py-10 mt-5 md:mt-0 xl:mt-[120px]">
        <div className="container">
          <div className="flex flex-col xl:flex-row gap-6">
            <YourScore />

            {/* Content */}
            <div className="w-full xl:w-3/4">
              <Evaluation />
              {/* <ParsedResumeOverview/> */}
              <BuildATSfriendlyResume />
              <IssuesFound />
              <Formatting />
              <Clarity />
              <GrammerAndSpelling />
              <RelevanceOfContent />
              <JobWinningResume />
              <ConcisenessAndImpact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
