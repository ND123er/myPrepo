export default function Modal({ address, close }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-3">Address</h2>
        <p className="text-gray-700">{address}</p>

        <button onClick={close} className="btn mt-4">Close</button>
      </div>
    </div>
  );
}