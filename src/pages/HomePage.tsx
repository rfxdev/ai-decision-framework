import type { JSX } from "react";

import {
  ArrowRightIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  PresentationChartBarIcon,
  ScaleIcon,
  ShieldCheckIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <ScaleIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  AI Decision Framework
                </h1>
                <p className="text-sm text-slate-600">
                  Stop guessing. Start making informed AI adoption decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Make informed AI decisions in{" "}
            <span className="text-blue-600">minutes</span>,<br />
            not months of trial and error
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            A structured evaluation platform that guides teams through the
            critical factors determining AI project success. Get clear,
            evidence-based recommendations before implementation begins.
          </p>
          <a
            href="/assessment/gen-ai-suitability"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center space-x-2 text-lg transition-colors"
          >
            <span>Start Assessment</span>
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>

        {/* Problem Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              The Problem
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Teams are rushing into AI implementations without systematic
              evaluation processes. The result? Expensive failures, missed
              opportunities, and growing scepticism about AI's practical value.
            </p>
            <p className="text-slate-600 mb-6">
              Most AI project failures aren't due to technical limitations —
              they stem from fundamental mismatches between the technology and
              the use case. Teams discover these incompatibilities too late:
              after budgets are allocated, expectations are set, and
              implementation has begun.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <XCircleIcon className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">
                    High-risk applications deployed without adequate safeguards
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircleIcon className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">
                    Complex AI solutions built for problems that simple software
                    could solve better
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <XCircleIcon className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">
                    Projects that fail because the underlying data isn't
                    suitable for AI processing
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircleIcon className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">
                    Teams lacking the operational capabilities needed to
                    maintain AI systems safely
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              The Solution
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Expert-guided evaluation processes that help teams make informed
              technology choices. Instead of starting with "How do we implement
              AI?", we start with "Should we use AI at all?"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center">
              <ShieldCheckIcon className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Filter Effectively
              </h3>
              <p className="text-slate-600">
                Drop poorly suited use cases early and save valuable time and
                resources
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center">
              <ExclamationTriangleIcon className="h-10 w-10 text-amber-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Identify Risks Early
              </h3>
              <p className="text-slate-600">
                Systematically identify technical, legal, and reputational
                challenges before implementation
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center">
              <ClipboardDocumentCheckIcon className="h-10 w-10 text-green-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Standardise Evaluation
              </h3>
              <p className="text-slate-600">
                Make consistent decisions across your organisation and product
                teams
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center">
              <BookOpenIcon className="h-10 w-10 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Build Expertise
              </h3>
              <p className="text-slate-600">
                Develop your team's AI decision-making capabilities through
                structured feedback
              </p>
            </div>
          </div>
        </section>

        {/* Assessment Outcomes */}
        <section className="bg-slate-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Assessment Outcomes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Proceed with confidence
                </h3>
              </div>
              <p className="text-slate-600">
                Your use case is well-suited for this technology approach. Move
                forward with implementation planning and receive specific
                guidance on best practices.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-amber-500">
              <div className="flex items-center space-x-3 mb-3">
                <ExclamationTriangleIcon className="h-8 w-8 text-amber-600" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Proceed with caution
                </h3>
              </div>
              <p className="text-slate-600">
                This approach can work but requires specific safeguards. Receive
                detailed guidance on the controls and processes needed for safe
                implementation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center space-x-3 mb-3">
                <XCircleIcon className="h-8 w-8 text-red-600" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Consider alternatives
                </h3>
              </div>
              <p className="text-slate-600">
                Other approaches would likely achieve better outcomes.
                Understand why this technology isn't suitable and what
                alternatives to explore instead.
              </p>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Who This Is For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CpuChipIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Technology Leaders
                  </h3>
                  <p className="text-slate-600">
                    Evaluating AI investment decisions and needing structured
                    processes to assess project viability
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PresentationChartBarIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Product Managers
                  </h3>
                  <p className="text-slate-600">
                    Determining whether AI capabilities should be part of their
                    product strategy
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CodeBracketIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Engineering Teams
                  </h3>
                  <p className="text-slate-600">
                    Evaluating technical feasibility and implementation
                    approaches before committing to AI development
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Business Stakeholders
                  </h3>
                  <p className="text-slate-600">
                    Understanding AI adoption implications without getting lost
                    in technical complexity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Assessment */}
        <section className="bg-blue-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Current Assessment: Gen AI Suitability
          </h2>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Evaluate whether Generative AI is appropriate for your specific use
            case through expert-guided questions about data suitability, risk
            assessment, failure recovery, bias impact, and operational
            readiness.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
            <span className="bg-blue-500 px-3 py-1 rounded-full">
              10-15 minutes
            </span>
            <span className="bg-blue-500 px-3 py-1 rounded-full">
              No AI expertise required
            </span>
            <span className="bg-blue-500 px-3 py-1 rounded-full">
              Immediate results
            </span>
          </div>
          <a
            href="/assessment/gen-ai-suitability"
            className="bg-white hover:bg-blue-50 text-blue-600 font-semibold py-4 px-8 rounded-lg inline-flex items-center space-x-2 text-lg border-2 border-white transition-colors"
          >
            <span>Begin Assessment</span>
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </section>
      </main>
    </div>
  );
}
