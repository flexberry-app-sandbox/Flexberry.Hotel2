package Hotel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Hotel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧ1
 */
@Entity(name = "IISHotelТЧ1")
@Table(schema = "public", name = "ТЧ1")
public class TCH1 {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Имущество")
    private String имущество;

    @Column(name = "Стоимость")
    private Integer стоимость;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "AOPI")
    @Convert("AOPI")
    @Column(name = "АОПИ", length = 16, unique = true, nullable = false)
    private UUID _aopiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "AOPI", insertable = false, updatable = false)
    private AOPI aopi;


    public TCH1() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмущество() {
      return имущество;
    }

    public void setИмущество(String имущество) {
      this.имущество = имущество;
    }

    public Integer getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Integer стоимость) {
      this.стоимость = стоимость;
    }


}