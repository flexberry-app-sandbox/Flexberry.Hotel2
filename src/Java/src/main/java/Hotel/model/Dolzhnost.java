package Hotel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Hotel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Должность
 */
@Entity(name = "IISHotelДолжность")
@Table(schema = "public", name = "Должность")
public class Dolzhnost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодДолжност")
    private Integer коддолжност;

    @Column(name = "Название")
    private String название;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PaspDannye")
    @Convert("PaspDannye")
    @Column(name = "ПаспДанные", length = 16, unique = true, nullable = false)
    private UUID _paspdannyeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PaspDannye", insertable = false, updatable = false)
    private PaspDannye paspdannye;


    public Dolzhnost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодДолжност() {
      return коддолжност;
    }

    public void setКодДолжност(Integer коддолжност) {
      this.коддолжност = коддолжност;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }


}