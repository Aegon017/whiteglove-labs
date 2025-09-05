import { createFileRoute } from '@tanstack/react-router';
import {
  Users,
  FileText,
  Target,
  Building,
  MessageSquare,
  Award,
  Handshake,
  Search,
  ClipboardList,
  CheckCircle,
  BarChart3
} from "lucide-react";

import OurApproachPath from '@/components/our-approach-path';
import { PageHero } from '@/components/page-hero';
import SectionLayout from '@/components/section-layout';
import InfoCard from '@/components/info-card';
import { motion } from "framer-motion"
import SectionHero from '@/components/section-hero';

export const Route = createFileRoute( '/our-approach' )( {
  component: OurApproach,
} );

function OurApproach() {
  const breakthroughSteps = [
    {
      title: "Define Candidate Personal",
      description: "In-depth discussions to identify organisational needs and ensure perfect fit through comprehensive candidate profiling.",
      icon: Users,
    },
    {
      title: "Build Job Description",
      description: "Craft detailed role scope, responsibilities, compensation, required skills, impact metrics, and growth opportunities.",
      icon: FileText,
    },
    {
      title: "Hiring Strategy",
      description: "Curate and align comprehensive hiring strategy with your strategic plans for building and scaling operations in India.",
      icon: Target,
    },
    {
      title: "Org Structure Mapping",
      description: "Deep understanding of organisational hierarchy and levels to ensure precise candidate alignment.",
      icon: Building,
    },
    {
      title: "Interview Calibration",
      description: "Comprehensive interview competency frameworks and structured evaluation processes with hiring teams.",
      icon: MessageSquare,
    },
    {
      title: "EVP & Compensation",
      description: "Deep dive into Employer Value Proposition, competitive compensation ranges, and benefits to attract top talent.",
      icon: Award,
    },
  ];

  const decisiveProfilingSteps = [
    {
      title: "Candidate Interactions",
      description: "We conduct interactions to evaluate candidates' expectations, leadership style, and alignment with your company's values.",
      icon: ClipboardList,
    },
    {
      title: "Detailed Assessments",
      description: "Using role descriptions and competencies, we assess each candidate's business acumen, cultural fit, and proven success in driving impact.",
      icon: BarChart3,
    },
    {
      title: "High-Quality Selection",
      description: "Our process ensures we present leaders who are highly qualified and well-suited to drive your organisation's success.",
      icon: CheckCircle,
    }
  ];

  const strategicSearchSteps = [
    {
      title: "Market Intelligence & Sourcing",
      description: "We create a detailed market intelligence report and draw a shortlist of potential leaders to be assessed.",
      icon: Search,
    },
    {
      title: "Candidate Engagement",
      description: "We ensure candidates receive white-glove treatment, keeping them keen, excited, and fully engaged throughout the process.",
      icon: Users,
    },
    {
      title: "Rapid Alignment",
      description: "Our structured process ensures fast alignment with your organization's strategic goals, minimizing delays and maximizing quality.",
      icon: Handshake,
    }
  ];

  return (
    <main className="bg-background min-h-screen">
      <PageHero
        title="Our Approach"
        subtitle="Comprehensive, transparent, and customized executive search for leadership talent."
      />

      <SectionLayout id='our-approach' className="bg-background">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={ { opacity: 0, x: 30 } }
            whileHover={ { y: -6 } }
            animate={ { opacity: 1, x: 0 } }
            transition={ { duration: 0.7 } }
            className="relative overflow-hidden"
          >
            <p className='mb-4 text-muted-foreground'>We collaborate with you to identify non-negotiables for the hire and formulate a strategy to enhance the hiring process while organizing a comprehensive exploration into organizational needs.</p>
            <p className='mb-4 text-muted-foreground'>We activate our current talent pool while simultaneously identifying high-performing leaders who have strong technology, business acumen, are a culture fit, and understand growing and scaling organizations.</p>
            <p className='mb-4 text-muted-foreground'>Before the assessment begins, a detailed document outlining expectations, values, and competencies is shared with candidates, who are then coached for the assessment ahead.</p>
            <p className='mb-4 text-muted-foreground'>We are delighted to offer support during any Offer discussions and continuous engagement, immersion into the organisation by discussion with people teams, hiring managers and other leaders to ensure no surprises arise.</p>
          </motion.div>
          <motion.div
            initial={ { opacity: 0, x: 30 } }
            whileHover={ { y: -6 } }
            animate={ { opacity: 1, x: 0 } }
            transition={ { duration: 0.7 } }
            className="relative overflow-hidden"
          >
            <img
              src="/our-approach.png"
              alt="Our Approach Illustration"
              className="w-full h-auto object-cover object-center"
              loading="lazy"
            />
          </motion.div>
        </div>
      </SectionLayout>
      <OurApproachPath />
      <SectionLayout id="breakthrough-session" className="bg-background">
        <SectionHero
          heading="Breakthrough Session"
          subHeading="Precision, Strategy, and Insight for Executive Hiring Success"
          brief="Our structured approach ensures alignment, precision, and excellence in executive hiring through comprehensive strategic planning."
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
          { breakthroughSteps.map( ( step, index ) => (
            <InfoCard key={ index }{ ...step } />
          ) ) }
        </div>
      </SectionLayout>

      <SectionLayout id="decisive-profiling" className="bg-muted">
        <SectionHero
          heading="Decisive Profiling"
          subHeading="Identifying Leaders Who Align with Your Vision and Values"
          brief="During weeks 2 to 4, we share a shortlist of high-performing leaders following in-depth discussions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          { decisiveProfilingSteps.map( ( step, index ) => (
            <InfoCard key={ index } { ...step } />
          ) ) }
        </div>
      </SectionLayout>

      <SectionLayout id="strategic-qualified-search" className="bg-background">
        <SectionHero
          heading="Strategic Qualified Search"
          subHeading="Fast-Tracking Top Talent to Accelerate Your Growth"
          brief="In under a week, our process is designed to deliver the ideal candidate for your organization's growth."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          { strategicSearchSteps.map( ( step, index ) => (
            <InfoCard key={ index } { ...step } />
          ) ) }
        </div>
      </SectionLayout>
    </main>
  );
}