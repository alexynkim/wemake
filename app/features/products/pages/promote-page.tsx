import React, { useState } from "react";

export default function PromotePage() {
  const [formData, setFormData] = useState({
    productId: "",
    promotionType: "",
    budget: "",
    duration: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Promote Your Product</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="mb-4">
          <label className="block mb-2">Product ID</label>
          <input
            type="text"
            value={formData.productId}
            onChange={(e) =>
              setFormData({ ...formData, productId: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Promotion Type</label>
          <select
            value={formData.promotionType}
            onChange={(e) =>
              setFormData({ ...formData, promotionType: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select promotion type</option>
            <option value="featured">Featured Listing</option>
            <option value="banner">Banner Advertisement</option>
            <option value="newsletter">Newsletter Promotion</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Budget (USD)</label>
          <input
            type="number"
            value={formData.budget}
            onChange={(e) =>
              setFormData({ ...formData, budget: e.target.value })
            }
            className="w-full p-2 border rounded"
            min="0"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Duration (days)</label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="w-full p-2 border rounded"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Start Promotion
        </button>
      </form>
    </div>
  );
}
