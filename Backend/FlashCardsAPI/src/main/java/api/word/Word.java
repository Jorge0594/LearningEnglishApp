package api.word;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "word")
public class Word {
	
	@Id
	private String id;
	private String word;
	private String type;
	private String meaning;
	private List<String> subType;
	private int nCorrect;
	private int nFail;
	private double percentCorrect;
	private String comment;
	
	public Word(){}

	public Word(String id, String word, String type, String meaning, List<String> subType, int nCorrect, int nFail, double percentCorrect, String comment) {
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

	public String getMeaning() {
		return meaning;
	}

	public void setMeaning(String meaning) {
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

	@Override
	public String toString() {
		return "Word [id=" + id + ", word=" + word + ", type=" + type + ", meaning=" + meaning + ", subType=" + subType + ", nCorrect=" + nCorrect + ", nFail=" + nFail + ", percentCorrect=" + percentCorrect + ", comment=" + comment + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((comment == null) ? 0 : comment.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((meaning == null) ? 0 : meaning.hashCode());
		result = prime * result + nCorrect;
		result = prime * result + nFail;
		long temp;
		temp = Double.doubleToLongBits(percentCorrect);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((subType == null) ? 0 : subType.hashCode());
		result = prime * result + ((type == null) ? 0 : type.hashCode());
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
		if (comment == null) {
			if (other.comment != null)
				return false;
		} else if (!comment.equals(other.comment))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (meaning == null) {
			if (other.meaning != null)
				return false;
		} else if (!meaning.equals(other.meaning))
			return false;
		if (nCorrect != other.nCorrect)
			return false;
		if (nFail != other.nFail)
			return false;
		if (Double.doubleToLongBits(percentCorrect) != Double.doubleToLongBits(other.percentCorrect))
			return false;
		if (subType == null) {
			if (other.subType != null)
				return false;
		} else if (!subType.equals(other.subType))
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		if (word == null) {
			if (other.word != null)
				return false;
		} else if (!word.equals(other.word))
			return false;
		return true;
	}

}
