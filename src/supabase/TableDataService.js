import { createClient } from "@supabase/supabase-js";
import keys from "../utils/keys";
class DocumentService {
      supabase;
      table = "articles";
      constructor() {
            this.supabase = createClient(keys.supabase_base_url, keys.supabase_key);
      }

      async createDoc(record) {
            try {
                  const { error } = await this.supabase.from(this.table).insert(record);
                  if (error) return false;
                  return true;
            } catch (error) {
                  console.log("Unable to create an article: ", error.message);
            }
      }
      async getAllDoc() {
            try {
                  const { data, error } = await this.supabase.from(this.table).select();
                  if (error) return false;
                  return data;
            } catch (error) {
                  console.log("Unable to fetch all the documents: ", error.message);
            }
      }
      async updateDoc(articles_id, record) {
            try {
                  const { error } = await this.supabase.from(this.table).update(record).eq("article_id", articles_id);
                  if (error) return false;
                  return true;
            } catch (error) {
                  console.log("Unable to update the documents: ", error.message);
            }
      }
      async deleteDoc(article_id) {
            try {
                  const response = await this.supabase.from(this.table).delete().eq("article_id", article_id);
                  if (response) return response;
            } catch (error) {
                  console.log("Unable to delete the documents: ", error.message);
            }
      }
      async getSingleDoc(article_id) {
            try {
                  const { data, error } = await this.supabase.from(this.table).select().eq("article_id", article_id);
                  if (error) return false;
                  return data;
            } catch (error) {
                  console.log("Unable to delete the documents: ", error.message);
            }
      }
}
const doc = new DocumentService();
export default doc;
