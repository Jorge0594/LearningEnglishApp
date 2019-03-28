package api.mongobulk;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.BulkOperations;
import org.springframework.data.mongodb.core.BulkOperations.BulkMode;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class MongoBulkService {

	@Autowired
	private MongoTemplate mongoTemplate;

	public void insert(List<? extends Object> documents, String collectionName) throws RuntimeException {
		try {
			BulkOperations bulk = mongoTemplate.bulkOps(BulkMode.UNORDERED, collectionName);
			bulk.insert(documents);

			bulk.execute();
		} catch (Exception e) {
			throw new RuntimeException("Cannot insert the block of ducuments. Exception: ", e);
		}
	}

	public void update(Query query, Update update, String collectionName) throws RuntimeException {
		try {
			BulkOperations bulk = mongoTemplate.bulkOps(BulkMode.UNORDERED, collectionName);
			bulk.updateMulti(query, update);

			bulk.execute();
		} catch (Exception e) {
			throw new RuntimeException("Caanot update the block of doments. Exception: ", e);
		}
	}

	public void remove(Query query, String collectionName) throws RuntimeException {
		try {
			BulkOperations bulk = mongoTemplate.bulkOps(BulkMode.UNORDERED, collectionName);
			bulk.remove(query);

			bulk.execute();
		} catch (Exception e) {
			throw new RuntimeException("Cannot remove the documents. Exception: ", e);
		}
	}

}
