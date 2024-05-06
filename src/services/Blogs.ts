import axios from "axios";

interface FormData {
  id?: string;
  title: string;
  description: string;
  liked: 1 | 0;
  unliked: 1 | 0;
}

class BlogsServices {
  static async fetchDataByIdEn(id: string) {
    try {
      const response = await axios.get(`http://localhost:3000/blogsEn/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data by ID:", error);
      return null;
    }
  }
  static async fetchDataByIdAr(id: string) {
    try {
      const response = await axios.get(`http://localhost:3000/blogsAr/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data by ID:", error);
      return null;
    }
  }
  static async fetchDataEn() {
    try {
      const response = await axios.get("http://localhost:3000/blogsEn");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
  static async fetchDataAr() {
    try {
      const response = await axios.get("http://localhost:3000/blogsAr");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  static async handleSubmitEn(formData: FormData) {
    try {
      await axios.post("http://localhost:3000/blogsEn", formData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  static async handleSubmitAr(formData: FormData) {
    try {
      await axios.post("http://localhost:3000/blogsAr", formData);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async deleteBlogEn(id: string) {
    try {
      await axios.delete(`http://localhost:3000/blogsEn/${id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  static async deleteBlogAr(id: string) {
    try {
      await axios.delete(`http://localhost:3000/blogsAr/${id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  static async editBlogEn(id: string, formData: FormData) {
    const url = `http://localhost:3000/blogsEn/${id}`;
    try {
      const response = await axios.put(url, formData);

      if (response.status !== 200) {
        throw new Error("Failed to update blog post.");
      }
    } catch (error) {
      console.error("Error updating blog post:", error);
    }
  }
  static async editBlogAr(id: string, formData: FormData) {
    const url = `http://localhost:3000/blogsAr/${id}`;
    try {
      const response = await axios.put(url, formData);

      if (response.status !== 200) {
        throw new Error("Failed to update blog post.");
      }
    } catch (error) {
      console.error("Error updating blog post:", error);
    }
  }
  static async handleLikeEn(id: string) {
    const url = `http://localhost:3000/blogsEn/${id}`;
    try {
      const response = await axios.patch(url, {
        liked: 1,
        unliked: 0,
      });

      if (response.status !== 200) {
        throw new Error("Failed to update card.");
      }
    } catch (error) {
      console.error("Error updating card:", error);
    }
  }

  static async handleLikeAr(id: string) {
    const url = `http://localhost:3000/blogsAr/${id}`;
    try {
      const response = await axios.patch(url, {
        liked: 1,
        unliked: 0,
      });

      if (response.status !== 200) {
        throw new Error("Failed to update card.");
      }
    } catch (error) {
      console.error("Error updating card:", error);
    }
  }

  static async handleUnLikeEn(id: string) {
    const url = `http://localhost:3000/blogsEn/${id}`;
    try {
      const response = await axios.patch(url, {
        liked: 0,
        unliked: 1,
      });

      if (response.status !== 200) {
        throw new Error("Failed to update card.");
      }
    } catch (error) {
      console.error("Error updating card:", error);
    }
  }
  static async handleUnLikeAr(id: string) {
    const url = `http://localhost:3000/blogsAr/${id}`;
    try {
      const response = await axios.patch(url, {
        liked: 0,
        unliked: 1,
      });

      if (response.status !== 200) {
        throw new Error("Failed to update card.");
      }
    } catch (error) {
      console.error("Error updating card:", error);
    }
  }
}

export default BlogsServices;
