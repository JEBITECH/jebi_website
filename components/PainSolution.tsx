export function PainSolution({ stage }: any) {
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 mb-12">
            <div className="mb-6">
                <div className="flex items-center gap-2 font-semibold">
                    <span className="w-4 h-4 rounded-full bg-red-500" />
                    Pain
                </div>
                <p className="text-gray-600 mt-2">{stage.pain}</p>
            </div>

            <hr className="my-6" />

            <div>
                <div className="flex items-center gap-2 font-semibold">
                    <span className="w-4 h-4 rounded-full bg-green-500" />
                    Solution
                </div>
                <h3 className="text-blue-600 font-bold mt-2">
                    {stage.solutionTitle}
                </h3>
                <p className="text-gray-600 mt-1">{stage.solution}</p>
            </div>
        </div>
    );
}
