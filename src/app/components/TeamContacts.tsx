import { contacts } from '../../lib/data';

export default function TeamContacts() {
  if (!contacts || contacts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">Our Contacts</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((c, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold mr-4">
                  {c.name?.charAt(0) || 'I'}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">{c.name}</h3>
                  {c.title !== undefined && (
                    <p className="text-sm text-blue-500">{c.title}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2 text-sm">
                {c.email && (
                  <p className="text-gray-700"><span className="font-medium">Email:</span> {c.email}</p>
                )}
                {c.phone && (
                  <p className="text-gray-700"><span className="font-medium">Phone:</span> {c.phone}</p>
                )}
                {c.address && (
                  <p className="text-gray-700"><span className="font-medium">Address:</span> {c.address}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
