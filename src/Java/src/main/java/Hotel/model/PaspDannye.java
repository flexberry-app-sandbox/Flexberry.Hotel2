package Hotel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Hotel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ПаспДанные
 */
@Entity(name = "IISHotelПаспДанные")
@Table(schema = "public", name = "ПаспДанные")
public class PaspDannye {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ДатаРожд")
    private Date датарожд;

    @Column(name = "СерияПаспорта")
    private Integer серияпаспорта;

    @Column(name = "НомерПаспорта")
    private Integer номерпаспорта;

    @Column(name = "Гражданство")
    private String гражданство;

    @Column(name = "ИнГражд")
    private Boolean ингражд;


    public PaspDannye() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Date getДатаРожд() {
      return датарожд;
    }

    public void setДатаРожд(Date датарожд) {
      this.датарожд = датарожд;
    }

    public Integer getСерияПаспорта() {
      return серияпаспорта;
    }

    public void setСерияПаспорта(Integer серияпаспорта) {
      this.серияпаспорта = серияпаспорта;
    }

    public Integer getНомерПаспорта() {
      return номерпаспорта;
    }

    public void setНомерПаспорта(Integer номерпаспорта) {
      this.номерпаспорта = номерпаспорта;
    }

    public String getГражданство() {
      return гражданство;
    }

    public void setГражданство(String гражданство) {
      this.гражданство = гражданство;
    }

    public Boolean getИнГражд() {
      return ингражд;
    }

    public void setИнГражд(Boolean ингражд) {
      this.ингражд = ингражд;
    }


}