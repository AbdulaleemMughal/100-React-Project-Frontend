import { CodeEditor } from "@/shared/CodeEditor";

export const Card = () => {
  return (
    <div className="border border-gray-200 rounded-md">
      <div className="p-6">
        <div className="border border-gray-300 rounded-md overflow-hidden w-[300px] flex flex-col">
          <img
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            alt="image"
            className="h-52 w-full"
          />
          <div className="p-4">
            <h5 className="mb-2 text-2xl font-semibold">Card Title</h5>
            <p className="mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <button className="py-2 px-4 bg-blue-600 rounded-md text-white cursor-pointer">
              Go Somewhere
            </button>
          </div>
        </div>
      </div>
      <CodeEditor
        jsxCode={`
            export const Card = () => {
                return (
                    <div className="border border-gray-300 rounded-md overflow-hidden w-[300px] flex flex-col">
                        <img
                            src="..."  // Paste your Image Link here.
                            alt="image"
                            className="h-52 w-full"
                        />
                        <div className="p-4">
                            <h5 className="mb-2 text-2xl font-semibold">Card Title</h5>
                            <p className="mb-4">
                                Some quick example text to build on the card title and make up the
                                bulk of the card’s content.
                            </p>
                            
                            // You can use the Link Tag or onClick attribute to perform operation by clicking on button
                            <button className="py-2 px-4 bg-blue-600 rounded-md text-white cursor-pointer">
                                Go Somewhere
                            </button>
                        </div>
                    </div>
                );
            };
        `}
        tsxCode={`
            export const Card = () => {
                return (
                    <div className="border border-gray-300 rounded-md overflow-hidden w-[300px] flex flex-col">
                        <img
                            src="..."  // Paste your Image Link here.
                            alt="image"
                            className="h-52 w-full"
                        />
                        <div className="p-4">
                            <h5 className="mb-2 text-2xl font-semibold">Card Title</h5>
                            <p className="mb-4">
                                Some quick example text to build on the card title and make up the
                                bulk of the card’s content.
                            </p>

                            // You can use the Link Tag or onClick attribute to perform operation by clicking on button
                            <button className="py-2 px-4 bg-blue-600 rounded-md text-white cursor-pointer">
                                Go Somewhere
                            </button>
                        </div>
                    </div>
                );
            };
        `}
      />
    </div>
  );
};
