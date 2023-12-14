package Hotel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Hotel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ЖРИГ
 */
@Entity(name = "IISHotelЖРИГ")
@Table(schema = "public", name = "ЖРИГ")
public class ZHRIG {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЖурн")
    private Integer номержурн;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Admin")
    @Convert("Admin")
    @Column(name = "Админ", length = 16, unique = true, nullable = false)
    private UUID _adminid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Admin", insertable = false, updatable = false)
    private Admin admin;

    @OneToMany(mappedBy = "zhrig", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCH2> tch2s;


    public ZHRIG() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЖурн() {
      return номержурн;
    }

    public void setНомерЖурн(Integer номержурн) {
      this.номержурн = номержурн;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}