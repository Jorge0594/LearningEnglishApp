package api.word;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import api.views.MeaningView;

@Document(collection = "word")
public class Word {

	@Id
	private String id;
	private String user;
	private String word;
	private String type;
	private List<MeaningView> meaning;
	private List<String> subType;
	private int nCorrect;
	private int nFail;
	private double percentCorrect;
	private String comment;

	public Word() {
	}

	public Word(String id, String word, String type, List<MeaningView> meaning, List<String> subType, int nCorrect, int nFail, double percentCorrect, String comment, String user) {
		super();
		this.id = id;
		this.word = word;
		this.type = type;
		this.meaning = meaning;
		this.subType = subType;
		this.nCorrect = nCorrect;
		this.nFail = nFail;
		this.percentCorrect = percentCorrect;
		this.comment = comment;
		this.user = user;
	}
	
	public Word(String user, String word, String type, int nCorrect, int nFail, double percentCorrect, String comment) {
		super();
		this.user = user;
		this.word = word;
		this.type = type;
		this.nCorrect = nCorrect;
		this.nFail = nFail;
		this.percentCorrect = percentCorrect;
		this.comment = comment;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	public String getType() {
		return type;
	}

	public List<MeaningView> getMeaning() {
		return meaning;
	}

	public void setMeaning(List<MeaningView> meaning) {
		this.meaning = meaning;
	}

	public void setType(String type) {
		this.type = type;
	}

	public List<String> getSubType() {
		return subType;
	}

	public void setSubType(List<String> subType) {
		this.subType = subType;
	}

	public int getnCorrect() {
		return nCorrect;
	}

	public void setnCorrect(int nCorrect) {
		this.nCorrect = nCorrect;
	}

	public int getnFail() {
		return nFail;
	}

	public void setnFail(int nFail) {
		this.nFail = nFail;
	}

	public double getPercentCorrect() {
		return percentCorrect;
	}

	public void setPercentCorrect(double percentCorrect) {
		this.percentCorrect = percentCorrect;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Word [id=" + id + ", user=" + user + ", word=" + word + ", type=" + type + ", meaning=" + meaning + ", subType=" + subType + ", nCorrect=" + nCorrect + ", nFail=" + nFail + ", percentCorrect=" + percentCorrect + ", comment=" + comment + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		result = prime * result + ((word == null) ? 0 : word.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Word other = (Word) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		else {
			if (word == null) {
				if (other.word != null)
					return false;
			} else if (!word.equals(other.word))
				return false;
		}
		return true;
	}

}
